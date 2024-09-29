const mainupload = document.getElementById("main-upload");

// Upload File Zip
let interval;
let progress = 0;
let isStopped = false;
let extractedContent = "";

document.getElementById('upload-icon').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    
    if (files.length > 0) {
        const file = files[0];
        const fileType = file.name.split('.').pop().toLowerCase();
        
        if (fileType !== 'zip') {
            alert("Only ZIP files are allowed!");
            event.target.value = ""; 
        } else {
            resetProgress();
            uploadFile(file); 
        }
    }
});

// Pass the extract and display the percentage

document.getElementById('drag-drop-area').style.display = "block";
document.getElementById('upload-area').style.display = "none";


function uploadFile(file) {

    document.getElementById('drag-drop-area').style.display = "none";
    document.getElementById('upload-area').style.display = "flex";

    interval = setInterval(() => {
        console.log('Current progress:', progress);
        if (progress < 100) {
            progress++;
            document.querySelector('.progress').style.setProperty('--progress', progress + '%');
            document.getElementById('progress-text').textContent = progress + '%';
        } else {
            clearInterval(interval);
            showDonePage();
            extractZip(file);
        }
    }, 50);
}

// Extract the zip file

function extractZip(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = event.target.result;
        JSZip.loadAsync(data).then(function(zip) {
            const fileStructure = document.getElementById('file-structure');
            fileStructure.innerHTML = '';
            
            const folderTree = {};
            Object.keys(zip.files).forEach(fileName => {
                const parts = fileName.split('/');
                let currentFolder = folderTree;
                parts.forEach((part, index) => {
                    if (!currentFolder[part]) {
                        currentFolder[part] = (index === parts.length - 1) ? null : {};
                    }
                    currentFolder = currentFolder[part];
                });
            });

            displayFolderContents(folderTree, fileStructure, zip, []);
        });
    };
    reader.readAsArrayBuffer(file);
}


function displayFolderContents(folder, container, zip, path) {
    container.innerHTML = ''; 

    Object.keys(folder).forEach(item => {
        const itemPath = path.concat(item).join('/');
        if (folder[item] === null) {
            const fileItem = document.createElement('div');
            fileItem.classList.add('cursor-pointer', 'text-blue-300', 'mb-2');
    
            if (item.endsWith('.txt') || item.endsWith('.log')) {
                fileItem.innerHTML = `<img src="imgs/txt-icon.png" class="inline-block w-5 h-5 mr-2">${item}`;
            } else if (item.endsWith('.jpg') || item.endsWith('.png')) {
                fileItem.innerHTML = `<img src="imgs/image-icon.png" class="inline-block w-5 h-5 mr-2">${item}`;
            } else if (item.endsWith('.pdf')) {
                fileItem.innerHTML = `<img src="imgs/pdf-icon.png" class="inline-block w-5 h-5 mr-2">${item}`;
            } else {
                fileItem.innerHTML = `<img src="imgs/file-icon.png" class="inline-block w-5 h-5 mr-2">${item}`;
            }
    

            fileItem.addEventListener('click', async () => {
                const fileData = await zip.file(itemPath).async('blob');
    
                if (item.endsWith('.txt') || item.endsWith('.log')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const textContainer = document.createElement('pre');
                        textContainer.textContent = e.target.result;
                        document.getElementById('file-display').innerHTML = '';
                        document.getElementById('file-display').appendChild(textContainer);
                    };
                    reader.readAsText(fileData);
                } else if (item.endsWith('.jpg') || item.endsWith('.png')) {
                    const imgElement = document.createElement('img');
                    imgElement.src = URL.createObjectURL(fileData);
                    imgElement.classList.add('max-w-full', 'h-auto');
                    document.getElementById('file-display').innerHTML = '';
                    document.getElementById('file-display').appendChild(imgElement);
                } else if (item.endsWith('.pdf')) {
                    const pdfIframe = document.createElement('iframe');
                    pdfIframe.src = URL.createObjectURL(fileData);
                    pdfIframe.classList.add('w-full', 'h-screen');
                    document.getElementById('file-display').innerHTML = '';
                    document.getElementById('file-display').appendChild(pdfIframe);
                } else {
                    downloadFile(zip, itemPath);
                }
            });
    
            container.appendChild(fileItem);
        } else {
            const folderItem = document.createElement('div');
            folderItem.innerHTML = `<img src="imgs/folder-icon.png" class="inline-block w-5 h-5 mr-2">${item}`;
            folderItem.classList.add('cursor-pointer', 'text-yellow-300', 'mb-2');
            folderItem.addEventListener('click', () => {
                displayFolderContents(folder[item], container, zip, path.concat(item));
            });
            container.appendChild(folderItem);
        }
    });
    
    
    if (path.length > 0) {
        const backButton = document.createElement('div');
        backButton.textContent = 'Back';
        backButton.classList.add('cursor-pointer', 'text-gray-500', 'mt-4');
        backButton.addEventListener('click', () => {
            const parentPath = path.slice(0, -1);
            const parentFolder = parentPath.reduce((acc, part) => acc[part], folderTree);
            displayFolderContents(parentFolder, container, zip, parentPath);
        });
        container.appendChild(backButton);
    }
}

// Circle display
// Stop button & Pause button

document.getElementById('stop-icon').addEventListener('click', function() {
    if (!isStopped) {
        isStopped = true; 
        clearInterval(interval); 
        document.getElementById('stop-icon').src = 'imgs/pause-50.png';
    } else {
        isStopped = false;
        document.getElementById('stop-icon').src = 'imgs/stop-50.png';
    
        interval = setInterval(() => {
            console.log('Current progress:', progress);
            if (progress < 100) {
                progress++;
                document.querySelector('.progress').style.setProperty('--progress', progress + '%');
                document.getElementById('progress-text').textContent = progress + '%';
            } else if (progress === 100) {
                console.log('Progress reached 100%');
                clearInterval(interval);
                showDonePage();
            }
        }, 50);
    }
});

// Close button
document.getElementById('close-icon').addEventListener('click', function() {
    clearInterval(interval);
    resetProgress(); 
    document.getElementById('upload-area').style.display = "none";
    document.getElementById('drag-drop-area').style.display = "flex";
});

function showDonePage() {
    console.log("Showing done page");
    document.getElementById('upload-area').style.display = 'none';
    document.getElementById('done').style.display = 'grid';
}


function resetProgress() {
    progress = 0;
    isStopped = false;
    clearInterval(interval);
    document.querySelector('.progress').style.setProperty('--progress', '0%');
    document.getElementById('progress-text').textContent = '0%';
    document.getElementById('stop-icon').src = 'imgs/stop-50.png';
    document.getElementById('file-input').value = "";
}


// Open Link
document.getElementById("open").addEventListener("click", () => {
    document.getElementById("back-link").style.display = "block";
    mainupload.style.display = "none";
});

document.getElementById("close-back-link").addEventListener("click", () => {
    document.getElementById("back-link").style.display = "none";
    mainupload.style.display = "block";
});

// Send Another
const sendAnother = document.getElementById("send-another");
const dragDropArea = document.getElementById("drag-drop-area");
const done = document.getElementById("done");
const uploadarea = document.getElementById("upload-area");


sendAnother.addEventListener("click", () => {
    // Reset progress
    resetProgress(); 

    // Show drag-drop area again
    document.getElementById('drag-drop-area').style.display = "flex";
    
    // Hide upload area
    document.getElementById('upload-area').style.display = "none";

    // Hide the "done" section
    done.style.display = "none";
});

    
  
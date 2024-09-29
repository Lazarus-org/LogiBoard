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


function resetProgress() {
    progress = 0;
    isStopped = false;
    clearInterval(interval);
    document.querySelector('.progress').style.setProperty('--progress', '0%');
    document.getElementById('progress-text').textContent = '0%';
    document.getElementById('stop-icon').src = 'imgs/stop-50.png';
    document.getElementById('file-input').value = "";
}
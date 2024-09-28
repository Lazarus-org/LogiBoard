const mainupload = document.getElementById("main-upload");

// Upload File Zip

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
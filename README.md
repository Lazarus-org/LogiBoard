# LogiBoard
A dashboard for log management

![License](https://img.shields.io/github/license/lazarus-org/LogiBoard)
![Last Commit](https://img.shields.io/github/last-commit/lazarus-org/LogiBoard)
![Open Issues](https://img.shields.io/github/issues/lazarus-org/LogiBoard)

## Project Detail

The **ZIP File Uploader** is a web application designed to simplify the process of uploading and extracting ZIP files in a user-friendly interface. The project focuses on providing an efficient method for users to manage compressed files directly from their browser without needing to manually extract them on their local machine. 

Key components of the project include:
- **File Upload and Extraction**: Users can use the file selection method. Once the file is uploaded, the system automatically extracts its contents and displays them in an organized structure.
- **Real-Time Progress Tracking**: A progress bar shows the live status of the upload, and users have the ability to pause and resume uploads as needed, providing better control over large file transfers.
- **Content Preview**: After extraction, the contents of the ZIP file—whether folders or individual files—are displayed in a structured format on the webpage. This makes it easy to access and interact with the contents directly.

### Goals

The primary goal of this project is to streamline the process of managing ZIP files by:
- Making the upload and extraction process
- Providing users with detailed information on the contents of their ZIP files immediately after upload.
- Offering a visual representation of file upload progress and interactive controls (e.g., pausing/resuming).


This project is intended to serve as a starting point for creating more advanced file management systems on the web, incorporating real-time interaction and high-level control over file uploads.

### Challenges

In developing the ZIP File Uploader, the following technical challenges were encountered:
- **Cross-Browser Compatibility**: Ensuring that the file extraction functionality work smoothly across different browsers.
- **Efficient File Handling**: Handling large ZIP files without affecting performance or causing browser crashes.
- **Progress Management**: Implementing a smooth and accurate upload progress tracker, allowing users to pause, resume, and cancel uploads as needed.


## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The Zip File Uploader is a simple tool that allows users to upload ZIP files, which are extracted automatically once uploaded. The user can view the contents of the ZIP file directly in the browser, making it easy to work with multiple files packaged in a ZIP archive.

This project provides:
- Real-time upload progress tracking
- Pause and resume functionality during the upload
- Display of the extracted files and folders once the upload is complete
- A generated URL to access the uploaded ZIP file contents

### Features

- **Support for uploading** : Easily upload your zip file
- **Progress Bar** : Displays upload progress with options to pause or resume.
- **File Preview** : Displays the contents of the uploaded ZIP file, including folders and files.

## Technologies Used

- **HTML5** : Markup language for structuring the web content.
- **Tailwind CSS** : CSS framework for styling and responsiveness.
- **JavaScript** : Core functionality and handling file uploads.
- **File API** : Extracting the contents of ZIP files.

## Installation

To run the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [Git](https://git-scm.com/)


### Steps

1. **Clone the Repository** :

   - Open your terminal and run the following command to ```Clone``` the project :
   ```bash
    git clone https://github.com/Lazarus-org/LogiBoard.git
   ```

2. **Clone the Repository** :

   - Navigate to the Project Directory: After cloning the repository, move into the ```Project folder``` :
    ```bash
     cd LogiBoard
    ```

## Optional

 - **Run the Application** :

    - If you want to create a production ```build``` of the application, run :
    ```bash
     npm run build-css
     ```


## Usage

### Uploading a ZIP File

1. **Open the Web Page**:
   Navigate to the page where the ZIP File Uploader is hosted.

2. **Upload the ZIP File**: 
You can click the "Upload Cloud" button to select a file.

3. **Track the Upload Progress**:
   - Once the file is selected or dropped, the upload will start automatically.
   - A progress bar will display the percentage of the upload.
   - You can pause or resume the upload at any time using the pause/resume button.

4. **File Extraction**:
   After the upload is complete, the contents of the ZIP file will be extracted automatically. You will be able to see the extracted files and folders directly on the page.

5. **View**:
   You can view the contents of the ZIP file by expanding the file tree displayed on the page.

### Example

Here’s how to use the uploader step-by-step:

1. **Step 1**: Open the page in your browser.
2. **Step 2**:click for upload a  file.
3. **Step 3**: Monitor the progress, and if needed, pause/resume the upload.
4. **Step 4**: Once the upload is 100%, explore the extracted contents .

### Notes
 Ensure that the file is a valid ZIP archive before uploading.




## Contributing

We welcome contributions from the community to enhance the Zip File Uploader project. Whether you are a developer, designer, or simply have ideas to improve the project, your input is valuable! To get started, please follow these guidelines :

### 1. Fork the Repository

Start by forking the project repository on GitHub. This creates a copy of the project under your account, allowing you to make changes without affecting the main codebase.

- Click on the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

Clone your forked repository to your local machine using the following command :
```bash
 https://github.com/Lazarus-org/LogiBoard.git
``` 

### 3. Create a New Branch

Before making changes, create a new branch for your feature or fix. Use a descriptive name that indicates the purpose of your changes. For example :
```bash
 git checkout -b feature/add-upload-validation
``` 

### 4. Make Changes

Implement your changes in the code. You can modify files, add new features, or fix bugs as needed. Be sure to test your changes thoroughly to ensure they work as expected.

### 5. Commit Your Changes

Once you are satisfied with your changes, commit them with a clear and descriptive message :
```bash
 git add .
 git commit -m "Add validation for ZIP file uploads"
```

### 6. Push Your Changes

Push your changes back to your forked repository :
```bash
 git push origin your-branch-name
``` 

This section provides clear steps and expectations for contributors .

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.**
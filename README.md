
# File-Swift-Uploader

File-Swift-Uploader is a tool that simplifies the process of uploading files and generating sharable shortlinks for those files. Whether you want to quickly share a document, image, or any other type of file, this uploader has got you covered.

Frontend Code : [Frontend Link](https://github.com/ank002111/fileSwiftUploaderPlatfrom)
Backend Code  : [Backend Link](https://github.com/ank002111/fileSwiftBackend)
## Features
1.Easy File Upload: Upload files of various types and sizes effortlessly. Just select the file you want to upload, and the uploader will take care of the rest.

2.Quick Shortlink Generation: Once your file is uploaded, the File Swift Uploader generates a shortlink that you can easily share with others. No need for long and complicated URLs.

3.Shareable: Share your shortlinks with anyone .

4.Manage Uploaded Files :The File Swift Uploader also offers convenient features for managing files that have already been uploaded. Whether you want to view, delete, or organize your uploaded files, this tool makes it easy.

5.Delete Uploaded File : Tool has feature of delete .


## Demo

The app requires the user to select any file from the local storage and submit the uploaded file. Once the file upload is completed, the user is provided a download link and a shareable link. The shareable link will be valid for 15 days after file upload, after which the document is deleted from the Database using the TTL concept.

![2023-10-08 (2)](https://github.com/ank002111/fileSwiftUploaderPlatfrom/assets/75662819/ed8132c1-9657-45ac-8c18-eea60d2fc23d)
![2023-10-08 (3)](https://github.com/ank002111/fileSwiftUploaderPlatfrom/assets/75662819/acf8f073-eea9-423b-8c95-abf0ee44e846)
![2023-10-08 (4)](https://github.com/ank002111/fileSwiftUploaderPlatfrom/assets/75662819/14fc6f60-ec92-4c1e-a04b-467cb711366e)
![2023-10-08](https://github.com/ank002111/fileSwiftUploaderPlatfrom/assets/75662819/40a0cab1-9adf-4ea5-a68b-606582d8ece4)
## Demo Video



https://github.com/ank002111/fileSwiftUploaderPlatfrom/assets/75662819/e25d8752-1fe0-49a0-b6f6-3d188298b539



## Info
1.The app is built using the MERN stack and uses the multer node package to handle file uploads. React hooks are used in the client-side and not class-based components.

2.All file formats are supported by the app .

3.The app doesn't currently allow multiplt file uploads at once, instead it is designed to upload only a single file at a time.
The links provided after the successful file upload include a download link, which can download the file immediately, and a shareable link which allows the user to easily share  the file. The shareable link, when clicked, will lead to the original file being downloaded.

4.The process involved in the process of uploading and fetching the file is as follows:

The multer package is configured to accept file uploads with the configuration specified earlier. 

The file is uploaded to cloud MongoDb Atlas database.

In order to download the file use NodeJs method download.

The shareable link sends the user to another page of the app with the Short ID(mongoDB object.Shortid ) as part of the params.

The mongoDB objects have a TTL(time-to-live) set to 15 days, therefore the links obtained after file upload are valid only for 15 days from the time of file upload.

To Share (Copy) Link used react-copy-to-clipboard package.

## Technology Used
Some of the technologies used in the development of this web application are as follow:

MongoDB Atlas: It provides a free cloud service to store MongoDB collections.

React.js: A JavaScript library for building user interfaces. In particular, React hooks are used in the clientside of the application

Node.js: A runtime environment to help build fast server applications using JS.

Express.js: A popular Node.js framework to build scalable server-side for web applications.

Mongoose: An ODM(Object Data Modelling)library for MongoDB and Node.js

Multer: Node.js packages that help in dealing with file uploads.
shortid : Node.js packages that help to generate short id .

Chakra UI :A simple, modular and accessible component library that gives you the building blocks you need to build your React applications
## Potential Improvements
1.Allowing multiple file uploads simultaneously.

2.Setting up folder to organize file  and Search file feature to search a specific one in folders.

3.A user authentication and Authorization setup for signin and signUp.

4.A dashboard for registered users.

5.Private sharing file via E-mail

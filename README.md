# 📜 Sign-Up Form-validation using Context
This is Simple login and logout form with some form-validation using ContextAPI which is manage all globally.

## 🚀 Features
- Create the New User(Sign-up).
- Login with existing credentials.
- Shows the success or error messages.
- Shows all fields are mandatory error message if user submit empty form.
- Store the user data at local storage.
- Context handle all signup logic.

## 📽️ Live Demo
You can see Demo Here: https://form-validation-git-main-prateek205s-projects.vercel.app/

## 🛠️ Getting Start
#### 1. Clone Repository.
```
git clone https://github.com/prateek205/form-validation.git
cd form-validation
```
#### 2. Install Dependencies
```
npm install
```
#### 3. Start the Development Server
```
npm run dev
```

## 🧠 How it Works
#### 1. authContext.jsx
```
<FormContext.Provider value={{ error, successMsg, msgType, handleChange, handleSubmit, formData }}>
{children}
</FormContext.Provider>
```

## SignUp 
- Validate the Form.
- Save to LocalStorage.
- Show the Success Message.

## 📂 Local Storage
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

## ✅ ToDo / Improvement
- Encrypt the Password(Do not store plain Password).
- Store at Backend Database Like MongoDB.
- Protect Routes(Private page).

## 📂 Folder structure
```
├── Sign-Up Form-Validation
├── public 
├── src/
│   ├── Assets
│   ├── Components/
│   │   └── Form.jsx
│   ├── Context/
│   │   └── authContext.jsx
│   ├── Style/
│   │   └── form.css
│   ├── App.jsx
│   ├── index.css
│   └── Main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

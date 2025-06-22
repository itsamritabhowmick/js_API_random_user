# 👤 Random User API App

This is a simple web application that dynamically fetches and displays random user data using the [Random User API](https://randomuser.me/). It generates multiple user cards on page load, showcasing information such as name, email, mobile number, age, and profile picture. The application is built using vanilla JavaScript, HTML, and CSS.

---

## 📌 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [API Reference](#api-reference)
- [Author](#author)

---

## 🌟 Features

- Generates 5 random user cards automatically on page load.
- Displays:
  - User profile image
  - Full name
  - Email address
  - Mobile number
  - Age
- Responsive and styled layout using CSS Flexbox.
- Asynchronous API integration using `fetch()`.

---

## 🚀 Demo

> 📎 **Demo URL** : [_Visit the site_](https://itsamritabhowmick.github.io/js_API_random_user/)

---

## 🛠️ Technologies Used

- **HTML5** – Markup structure
- **CSS3** – Styling the user cards and layout
- **JavaScript (ES6+)** – DOM manipulation and asynchronous API calls
- **[RandomUser API](https://randomuser.me/)** – RESTful service for generating random user data

---

## 📁 Project Structure

```
random-user-api-project/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet for layout and card design
├── index.js            # JavaScript logic for DOM & API integration
└── README.md           # Project documentation
```

---

## 🧰 Getting Started

To run this project locally:

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-user-api-project.git
   ```

2. Navigate to the project folder:

   ```bash
   cd random-user-api-project
   ```

3. Open `index.html` in any browser to view the app.

---

## ⚙️ How It Works

1. On loading the page, a loop creates 5 empty user cards using DOM manipulation.
2. For each card, an API call is made to `https://randomuser.me/api/`.
3. The response JSON includes the user’s:
   - Picture (`picture.large`)
   - Name (`name.first` + `name.last`)
   - Email (`email`)
   - Phone number (`phone`)
   - Age (`dob.age`)
4. The information is inserted into the corresponding DOM elements.

---

## 🔗 API Reference

**Endpoint**:  
`https://randomuser.me/api/`

**Sample Response Structure**:

```json
{
  "results": [
    {
      "name": { "first": "John", "last": "Doe" },
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "dob": { "age": 30 },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg"
      }
    }
  ]
}
```

---

## 👨‍💻 Authors

**Amrita Bhowmick**  
M.Sc. in Computer Science  
Surendranath College

- GitHub: [@itsamritabhowmick](https://github.com/itsamritabhowmick/)
- LinkedIn: [@itsamritabhowmick](https://www.linkedin.com/in/itsamritabhowmick/)

**Priyam Bhattacharya**  
M.Sc. in Computer Science  
University of Calcutta

- GitHub: [@itspriyambhattacharya](https://github.com/itspriyambhattacharya)
- LinkedIn: [@itspriyambhattacharya](https://www.linkedin.com/in/itspriyambhattacharya/)

---

## 📌 Future Enhancements (Suggestions)

- Add "Generate New User" button.
- Enable filtering by gender, nationality, or age group.
- Include loading spinner during API fetch.
- Use localStorage to persist users on reload.
- Add dark/light theme toggle.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

function createCard() {
  const card = document.createElement("div");
  const innerCard = document.createElement("div");
  const pic = document.createElement("img");
  const nameH3 = document.createElement("h3");
  const nameSpan = document.createElement("span");
  const emailH3 = document.createElement("h3");
  const emailSpan = document.createElement("span");
  const mobileH3 = document.createElement("h3");
  const mobileSpan = document.createElement("span");
  const ageH3 = document.createElement("h3");
  const ageSpan = document.createElement("span");

  card.classList.add("card1");
  innerCard.classList.add("center");
  innerCard.classList.add("custom"); // center custom

  nameH3.classList.add("custom");
  emailH3.classList.add("custom");
  mobileH3.classList.add("custom");
  ageH3.classList.add("custom");

  nameH3.innerHTML = "Name: ";
  emailH3.innerHTML = "Email: ";
  mobileH3.innerHTML = "Mobile: ";
  ageH3.innerHTML = "Age: ";

  pic.classList.add("picture");
  pic.src = "";
  pic.alt = "";
  nameSpan.classList.add("name");
  emailSpan.classList.add("email");
  mobileSpan.classList.add("mobile");
  ageSpan.classList.add("age");

  card.appendChild(innerCard);
  innerCard.appendChild(pic);
  nameH3.appendChild(nameSpan);
  emailH3.appendChild(emailSpan);
  mobileH3.appendChild(mobileSpan);
  ageH3.appendChild(ageSpan);

  card.appendChild(nameH3);
  card.appendChild(emailH3);
  card.appendChild(mobileH3);
  card.appendChild(ageH3);

  const root = document.getElementById("cards-container");
  root.appendChild(card);

  console.log(card);
}

async function getUser(i) {
  const temp_user_image = document.getElementsByClassName("picture");
  const picArr = Array.from(temp_user_image);
  const user_image = picArr[i];
  console.log(user_image);

  const temp_user_name = document.getElementsByClassName("name");
  const name_Arr = Array.from(temp_user_name);
  const user_name = name_Arr[i];
  console.log(user_name);

  const temp_user_email = document.getElementsByClassName("email");
  const email_Arr = Array.from(temp_user_email);
  const user_email = email_Arr[i];
  console.log(user_email);

  const temp_user_mobile = document.getElementsByClassName("mobile");
  const mobile_Arr = Array.from(temp_user_mobile);
  const user_mobile = mobile_Arr[i];
  console.log(user_mobile);

  const temp_user_age = document.getElementsByClassName("age");
  const age_Arr = Array.from(temp_user_age);
  const user_age = age_Arr[i];
  console.log(user_age);
  try {
    const res = await fetch(`https://randomuser.me/api/`);
    const data = await res.json();

    const pic = data.results[0].picture.large;
    console.log(pic);
    user_image.src = pic;

    // user_image.innerHTML = pic;

    const fn = data.results[0].name.first;
    const ln = data.results[0].name.last;
    const fullName = fn + " " + ln;
    user_name.innerHTML = fullName;

    const em = data.results[0].email;
    console.log(em);

    user_email.innerHTML = em;

    const mob = data.results[0].phone;
    user_mobile.innerHTML = mob;

    const ag = data.results[0].dob.age;
    user_age.innerHTML = ag;
  } catch (err) {
    console.log(err);
  }
}

for (let i = 0; i < 5; i++) {
  createCard();

  getUser(i);
}

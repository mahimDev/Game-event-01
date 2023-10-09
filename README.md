Project Name VR Console
live link 👉 https://assingment-9-project-e316b.web.app/

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

- A: `{}`

  <i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

- C: `"12"`
  <i>Write your explanation here</i>

In JavaScript, when you use the + operator with a string and a number, it performs string concatenation. In this case, 1 is a number, and "2" is a string, so JavaScript will convert

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

- A: `['🍕', '🍫', '🥑', '🍔']`
<i>Write your explanation here</i>
In this line, you change the value of info.favoriteFood to "🍝". This line only modifies the info object, updating the favoriteFood property within the object.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

- B: `Hi there, undefined`
<i>Write your explanation here</i>
In this line, you call the sayHi function without passing any arguments. When you call a function without providing the expected arguments, the parameters inside the function are assigned the value of undefined.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

- C: 3
<i>Write your explanation here</i>
👀👀👀👀
</p>
</details>

<!-- 5 Features of My Website: -->

5 Features of My Website:

• Login with Email and Password: Easily access your account by entering your email and password.

• Google Account Integration: Seamlessly log in using your Google account credentials.

• Private Event Details: Clicking on the details button within a gaming event card will direct you to a private route with more information.

• Effortless Registration: If you don't have an account, clicking on the details button will smoothly lead you to the registration page.

• Cross-Device Compatibility: This website is designed to provide a user-friendly experience on mobile, tablet, and PC, ensuring accessibility across all devices.

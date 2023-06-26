let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
message.style.display = "none"
// let user = document.getElementById("user")

let addData = () => {
  message.style.color = "red";
  if ((name1.value == "")) {
    message.innerHTML = "Fill Your Name";
  } else if ((email.value == "")) {
    message.innerHTML = "Fill Your Email";
  } else if ((number.value =="")) {
    message.innerHTML = "Fill Your Number";
  } else {
    firebase.database().ref("users/").push({
      Username: name1.value,
      Email: email.value,
      Number: number.value,
    });
    message.innerHTML = "Data Saved Successfully";
    message.style.color = "green";
    name1.value = "";
    email.value = "";
    number.value = "";
  }
};






let input = document.getElementById("input");
let message = document.getElementById("message")
let AddData = () => {
    message.style.display = "block"
    if (input.value === "") {
        message.innerHTML = "Type something...";
        message.style.color = "red";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    } else {
        firebase.database().ref("todos/").push(
            {
                value: input.value
            }, (error) => {
                if (error) {
                    // The write failed...
                } else {
                    // Data saved successfully!
                    message.innerHTML = "Data saved successfully!";
                    message.style.color = "green";
                    input.value = ""
                    setTimeout(() => {
                        message.style.display = "none"
                    }, 2000);
                }
            }
        ).then((res) => {
            console.log(res);
            firebase.database().ref("todos/" + res.key).update({
                id: res.key
            })
        })
    }
}

// let loader = document.getElementById("loader")
// let ul = document.getElementById("ul")
// // get data
// firebase.database().ref("todos/").on("value", (dataRes) => {
//     console.log("dataRes",dataRes.ref
//     )
//     ul.innerHTML = ""
//     loader.style.display = "none";
//     ul.style.display = "block"
//     dataRes.forEach((res) => {
//         let data = res.val()
//         console.log("Data >>>>>>", data)
//         let li = document.createElement("li");
//         ul.appendChild(li);
//         li.innerHTML = data.value;
//         let editButton = document.createElement("button");
//         li.appendChild(editButton);
//         editButton.innerHTML = "Edit";
//         let deleteButton = document.createElement("button");
//         li.appendChild(deleteButton);
//         deleteButton.innerHTML = "Delete";
//         // edit funciton
//         editButton.addEventListener("click", () => {
//             var pro = prompt("", data.value)
//             firebase.database().ref("todos/" + data.id).update({
//                 value: pro
//             })
//         })
//         // delete funciton
//         deleteButton.addEventListener("click", () => {
//             firebase.database().ref("todos/" + data.id).remove()
//         })
//     })
// })











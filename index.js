import {
    initializeApp,
    firebaseConfig,
    getFirestore,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    serverTimestamp,
    collection
} from './firebaseApi.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(app)
console.log(db)

// HTML Elements
const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

const todoCollection = collection(db, "todos");


// (Created) data
btn.addEventListener("click", async () => {

    if (input.value.trim() === "") return;

    await addDoc(todoCollection, {
        text: input.value,
        createdAt: serverTimestamp()
    });

    input.value = "";
    loadTodos();   // Firebase se dobara load karo
});


// (read)  show list
async function loadTodos() {

    list.innerHTML = "";

    const snapshot = await getDocs(todoCollection);

    snapshot.forEach((docSnap) => {

        const li = document.createElement("li");

        li.innerHTML = `
      ${docSnap.data().text}
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    `;

        // (update) edit
        li.querySelector(".editBtn").addEventListener("click", async () => {

            const newText = prompt("Edit your task", docSnap.data().text);

            if (newText && newText.trim() !== "") {
                await updateDoc(doc(db, "todos", docSnap.id), {
                    text: newText
                });

                loadTodos();
            }
        });

        // (Delete) data
        li.querySelector(".deleteBtn").addEventListener("click", async () => {

            await deleteDoc(doc(db, "todos", docSnap.id));
            loadTodos();
        });

        list.appendChild(li);
    });
}


// 🔄 Page Load par bhi data show ho
loadTodos();
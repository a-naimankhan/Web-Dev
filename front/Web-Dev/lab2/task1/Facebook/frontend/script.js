const form = document.getElementById("login-form");

if (!form) {
    throw new Error("login-form: not found")
}



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = form.querySelector('input[type="password"]').value;
  const email = form.querySelector('input[type="email"]').value;

  console.log(email , password);

  

  
  
  const res = await fetch("http://localhost:3000/api/login", {
  

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email , password })
  });

  async function loadMe() {
    const res = await fetch("http://localhost:3000/api/me" , {
      header: {
        Authorization : `Bearers ${token}`
      }
    })

    const data = await res.json();
    console.log(data)
  }

  const data = await res.json();
  console.log(data);
});



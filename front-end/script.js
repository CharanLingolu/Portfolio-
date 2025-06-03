document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneno = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("https://portfolio-back-end-1s4b.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phoneno, message })
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset(); // optional
    } else {
      alert("❌ " + data.error);
    }
  } catch (err) {
    alert("❌ Failed to connect to server.");
    console.error(err);
  }
});

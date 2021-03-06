const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.getElementById("logout").addEventListener("click", logout);

const dt = new Date()
document.getElementById('dateTime').innerHTML=dt
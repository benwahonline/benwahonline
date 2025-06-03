const token = await user.getIdToken();
fetch('/cases', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

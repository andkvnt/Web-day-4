function buttonSubmit() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  if (!name) {
    return alert('Nama tidak boleh kosong');
  } else if (!email) {
    return alert('Email tidak boleh kosong');
  } else if (!phone) {
    return alert('Telephone tidak boleh kosong');
  } else if (!subject) {
    return alert('Pilih salah satu Subject');
  } else if (!message) {
    return alert('Berikan keterangan');
  } else {
    alert('Data berhasil dilengkapi');
  }

  let receiveMail = 'aoktavianto7@gmail.com';
  let a = document.createElement('a');

  a.href = `mailto:${receiveMail}?subject=${subject}&body=Halo nama saya ${name} ${message} , silahkan hubungi ${phone}, Email: ${email}`;
  a.click();
}
let siswa = {
  name,
  email,
  phone,
  subject,
  message,
};
console.log(siswa);

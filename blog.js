const photoIcon = document.querySelector('.preview .photo_icon'),
  imgPreview = document.querySelector('.preview .img_preview'),
  previewContainer = document.querySelector('.preview');

function preview(event) {
  const reader = new FileReader();

  reader.onloadend = () => {
    previewContainer.style.backgroundColor = 'transparent';
    photoIcon.style.display = 'none';
    imgPreview.style.display = 'block';
    imgPreview.src = reader.result;
  };

  reader.readAsDataURL(event);
}

let blogs = [];
const errAlert = document.querySelector('.alertError');

function addBlog(event) {
  event.preventDefault();

  const projectName = document.getElementById('name').value,
    startDate = document.getElementById('start-date').value,
    endDate = document.getElementById('end-date').value,
    description = document.getElementById('description').value,
    nodejs = document.getElementById('nodejs'),
    reactjs = document.getElementById('reactjs'),
    nextjs = document.getElementById('nextjs'),
    typescript = document.getElementById('typescript');

  if (!projectName) {
    return alert('Isi nama project');
  } else if (!startDate) {
    return alert('Pilih waktu project');
  } else if (!endDate) {
    return alert('Pilih waktu project');
  } else if (!description) {
    return alert('Berikan Keterangan');
  } else {
    alert('Data berhasil dilengkapi');
  }

  let image = document.getElementById('upload');

  image = URL.createObjectURL(image.files[0]);

  const checkboxes = [nodejs, nextjs, reactjs, typescript];

  const blog = {
    projectName,
    description,
    image,
    startDate,
    endDate,
    technologies: checkboxes.filter((c) => c.checked == true),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);
  let blogContainer = document.getElementById('blog-container');

  blogContainer.innerHTML = '';

  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `
      <div class="blog_items">
        <a href="blog-detail.html">
          <div class="blog_image">
            <img src="${blogs[i].image}" alt="Blog Image" />
          </div>
          <div class="blog_title">
            <h4 class="truncate">${blogs[i].projectName}</h4>
            <p class="truncate">
              ${blogs[i].description}
            </p>
          </div>
          <div class="blog_date">
            <p class="truncate">${blogs[i].startDate} - ${blogs[i].endDate}</p>
          </div>
        </a>
        <div class="blog_actions">
          <button type="button" class="action_btn">Edit</button>
          <button type="button" class="action_btn">Delete</button>
        </div>
      </div>
        `;
  }
}

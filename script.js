const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

let mensajes = [
  {
    "tipo": "imagen",
    "texto": ">Cada pétalo de esta flor lleva un te quiero para ti 💛",
    "src": "https://i.pinimg.com/originals/9d/c7/61/9dc76117ace53c9fe1b2f3c37e94eb3e.gif"
  },
  {
    "tipo": "imagen",
    "texto": "Das un poco* de luz a mi vida rutinaria. >Gracias por ser mi sol 🌞",
    "src": "https://pixnio.com/free-images/2017/10/17/2017-10-17-06-16-22.jpg"
  },
  {
    "tipo": "imagen",
    "texto": "Si haces el arroz chaufa rico ya no hay esacapatoria x.x",
    "src": "https://i.pinimg.com/originals/94/f0/65/94f0653d30bd368e5dfe492f0f60e01e.gif"
  },
  {
    "tipo": "imagen",
    "texto": "Eres mi Gatita favorita :$ (bromita obvious)",
    "src": "https://i.pinimg.com/originals/5f/6f/0c/5f6f0cc5877d1076d3eccdc4b0d5964d.gif"
  },
  {
    "tipo": "imagen",
    "texto": "Por ti ya no le contesto a las demás.. digo ya no hay más :$",
    "src": "https://media.tenor.com/gRI5ka--_rwAAAAM/smd.gif"
  },
  {
    "tipo": "imagen",
    "texto": "Qué buscas?",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNUDOlXdYDs_55dk3QdQN7Yks_Jax3rHlqQ&s"
  },
  /* {
    "tipo": "url-video",
    "texto": "Un par de nalgadas y a su casa >:3",
    "src": "https://v77.tiktokcdn.com/e760e5c78df946e7f13d469ead7a1ed8/68d1c0de/video/tos/useast2a/tos-useast2a-pve-0068/o4vTQxBoBQCIqiRKfEljfWLAsNTDrFu4OJG76E/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=800&bt=400&cs=0&ds=2&ft=bC~FgmadPD12NyG0Eh-UxCe2GY6e3wv25ycAp&mime_type=video_mp4&qs=0&rc=ZWY7aDszNzppOWVpMzg2ZkBpajhudHE5cjZoNTMzNzczM0AyNTY1M2FeXzMxMjAtMjZhYSNmM2NfMmRjcGphLS1kMTZzcw%3D%3D&vvpl=1&l=202509210534084354CA50A59E01791DE0&btag=e000b8000&cc=13"
  },
  {
    "tipo": "url-video",
    "texto": "Así terminaré, después de dartelas de chef? :v",
    "src": "https://v16m.tiktokcdn.com/f5626f96bbeb75a1f59dd9732c5a1c08/68d1dbbc/video/tos/alisg/tos-alisg-pve-0037c001/oYEDoyQrYQCgEBe8vylBILvAEjUmKrBI0gfFRC/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2230&bt=1115&cs=0&ds=3&ft=bC~FgmadPD12N8uJEh-UxCe2GY6e3wv25ycAp&mime_type=video_mp4&qs=0&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmNWk1ZmdmaDtkNTRmNjlnNEBpM28zOW85cmozNjMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiMzLl9hYV8wXjMxNjZiYi1iYSNzX2VzMmRrZjJhLS1kMTFzcw%3D%3D&vvpl=1&l=202509210728471DE6FF20B4C1067C02EA&btag=e000b0000&cc=3"
  },
  {
    "tipo": "url-video",
    "texto": "Te grabaron?",
    "src":   "https://v16m.tiktokcdn.com/3b4405e8ca2177e188ef250501f7dcc3/68d1dd81/video/tos/useast2a/tos-useast2a-pve-0068/okq9QJuwyDAwYHCTMyF5BRoLeEFQVBKoIzfHjE/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=680&bt=340&cs=0&ds=3&ft=bC~FgmadPD12NVfJEh-UxzIvSY6e3wv25XcAp&mime_type=video_mp4&qs=0&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmNzMzZWdnNzZpaWU7PDo0M0BpamQ5M3Y5cnZsNTMzNzczM0BjRl5Nc3FePmJKYSNvYF90aHFmOiNfNGBgMV9gX2IxYDVhMTZjYSNvMnNwMmRrcmVhLS1kMTZzcw%3D%3D&vvpl=1&l=20250921073625BD9D4F24FEB5047A6533&btag=e000b0000&cc=3"
  },
  {
    "tipo": "url-video",
    "texto": "Va para ambos >:v",
    "src":   "https://v16m.tiktokcdn.com/4ecb16da3852c5149aff7f0ab77dff4a/68d1def2/video/tos/useast2a/tos-useast2a-ve-0068c002/oUMCj7GzLJzxO85fVjzoACAInFXgQSeegRbmYI/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=836&bt=418&cs=0&ds=3&ft=bC~FgmadPD12NXBJEh-UxGyFGY6e3wv25dcAp&mime_type=video_mp4&qs=0&rc=PDM5NjtoOjc1ZzlmNjU5PEBpM2ZxeGs5cnhnNTMzNzczM0AzNi4xYmM0Xl8xXjYxLzNjYSNxLWBgMmQ0bGJhLS1kMTZzcw%3D%3D&vvpl=1&l=202509210742249087A16F36CB768C656C&btag=e000b8000&cc=3"
  },
  {
    "tipo": "url-video",
    "texto": "Nel!",
    "src":   "https://v16m.tiktokcdn.com/7eac6cf3340041f86b4a59981856b9cf/68d1df37/video/tos/alisg/tos-alisg-pve-0037c001/ocfHdWbESxRGGEQIKBFoAhLDgGp7gBLuf4xEkt/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1068&bt=534&cs=0&ds=2&ft=bC~FgmadPD12NmZJEh-UxXOFXY6e3wv25DcAp&mime_type=video_mp4&qs=0&rc=Ojc0Nzo0NztlZWU1Nmk5OkBpM3lncHA5cnFyNjMzODczNUAvYy0uLTZiNjQxYjNgNC1hYSMwMTFpMmRjYTBhLS1kMTZzcw%3D%3D&vvpl=1&l=20250921074345139B70D304522E80F517&btag=e000b0000&cc=3"
  },
  {
    "tipo": "url-video",
    "texto": "Toy volviendo a confiar en las mujeres (No la cagu*s :'v)",
    "src":   "https://v45.tiktokcdn.com/a2484c3c7cadb128270d9c07ea36d630/68d1e038/video/tos/useast2a/tos-useast2a-ve-0068c002/ok4gXZa5AfrIAdSRj00CCYQfsIIEQgLU6WEleG/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2004&bt=1002&cs=0&ds=3&ft=bCkK5mugPD12Np7JEh-UxBM2bY6e3wv25AcAp&mime_type=video_mp4&qs=0&rc=NTg4OTtnZWZkZmc2ZzQ8M0BpM2YzdHE5cnkzNjMzNzczM0BiYjJfLzUwXzYxMDI1NWAtYSNxbHFjMmQ0XjJhLS1kMTZzcw%3D%3D&vvpl=1&l=20250921074748AFC558D7D949A77FE357&btag=e000bd000"
  },
  {
    "tipo": "url-video",
    "texto": "Siempre tengo la razón :3",
    "src":   "https://v16m.tiktokcdn.com/dc128bb750e8b60f051ed31010072816/68d1e0af/video/tos/useast2a/tos-useast2a-ve-0068c003/oIbigxfBkI5pIz0CTN1tSSkwWAaA5ibgiGcsEo/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=864&bt=432&cs=0&ds=3&ft=bC~FgmadPD12NnHJEh-Uxt~2GY6e3wv25rcAp&mime_type=video_mp4&qs=0&rc=OGk4aDVpOmRoOjVoN2c7aUBpajc6cnM5cnAzNTMzNzczM0BhMTY1MTZgNjIxMjAxNTUzYSNqNGo2MmRjb19hLS1kMTZzcw%3D%3D&vvpl=1&l=20250921075000CD75F405CC03688349B6&btag=e000b0000&cc=3"
  }, 
  {
    "tipo": "url-video",
    "texto": "Ya no estamos para niñerias.",
    "src":   "https://v77.tiktokcdn.com/f51ebff7826dcdf5b81383aad9f02a6c/68d1e1aa/video/tos/useast2a/tos-useast2a-ve-0068c001/okCPjRDRjWrIIMf5CAI9geNetjUgsLQGgZSCAv/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=6018&bt=3009&cs=0&ds=3&ft=L~O_3og.D12NvUkEeWIxRyCSblBF-UjNSlopiX&mime_type=video_mp4&qs=0&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmZzpkOTlnOTY3Nmc3ZTw3M0BpM2o5Z3k5cmdxNjMzNzczM0BjRl5Nc3FePmJKYSNvYF90aHFmOiMuMC41NGExNjExMi8vYDRhYSMtbWIxMmRrZzBhLS1kMTZzcw%3D%3D&vvpl=1&l=202509210754120D36060A37DDE776A5DD&btag=e000b0000&cc=13"
  }, */
  {
    "tipo": "url-video",
    "texto": "❤️",
    "src":   "https://v77.tiktokcdn.com/bd8767766fb0574a794f425f707106ec/68d1e23c/video/tos/alisg/tos-alisg-pve-0037c001/oAADA2saw5RReCkG08Gkng9ioGTjIxLAeerIYg/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1754&bt=877&cs=0&ds=3&ft=bC~FgmadPD12ND-JEh-UxCw5GY6e3wv25pcAp&mime_type=video_mp4&qs=0&rc=ZjNoaDVkZDpkPDdlaWQ5OUBpM3VlOXc5cmlsNTMzODczNEAzLWIzYi1hNWAxMzUxYjMtYSMwZy40MmRrYDNhLS1kMTFzcw%3D%3D&vvpl=1&l=202509210756288CF1F291ECDE5B7EFA89&btag=e000b8000&cc=13"
  },
  {
    "tipo": "url-video",
    "texto": "Lo único que me importa.",
    "src": "https://v16m.tiktokcdn.com/ff0b111e5f1fa110d7adbd327747a7e3/68d1f1fb/video/tos/useast2a/tos-useast2a-pve-0068/okIbiAbZRYCJbVneCaWQgzMDIjAjeepiAS8XSw/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1734&bt=867&cs=0&ds=3&ft=bC~FgmadPD12N.JTEh-Ux~-5XY6e3wv251cAp&mime_type=video_mp4&qs=0&rc=NjxpZTw5NWQzNzNkZjppNEBpanRtN205cnJyNjMzNzczM0BeYmIvNWM1Ni8xYTJgLzFiYSNpaTU2MmRjYDBhLS1kMTZzcw%3D%3D&vvpl=1&l=202509210903231D3769F80597D582CB9A&btag=e00088000&cc=3"
  }
];


class Flower {
  constructor(isButton = false) {
    this.x = random(0, W);
    this.y = random(0, H);
    this.size = random(10, 20);
    this.petalCount = Math.floor(random(5, 8));
    this.speed = random(0.3, 1.2);
    this.isButton = isButton;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);

    for (let i = 0; i < this.petalCount; i++) {
      ctx.beginPath();
      ctx.rotate((2 * Math.PI) / this.petalCount);
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(this.size, this.size, 0, this.size * 2);
      ctx.quadraticCurveTo(-this.size, this.size, 0, 0);
      ctx.fillStyle = "#FFD700";
      ctx.fill();

      if (this.isButton) {
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.arc(0, 0, this.size / 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#8B4513";
    ctx.fill();

    if (this.isButton) {
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.restore();
  }

  update() {
    this.y += this.speed;
    if (this.y > H + 20) {
      this.y = -20;
      this.x = random(0, W);
    }
    this.draw();
  }

  isClicked(mouseX, mouseY) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    return Math.sqrt(dx * dx + dy * dy) < this.size * 2;
  }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const flowers = [];
const specialIndex = Math.floor(Math.random() * 50);
for (let i = 0; i < 50; i++) {
  flowers.push(new Flower(i === specialIndex));
}

function animate() {
  ctx.clearRect(0, 0, W, H);
  for (let flower of flowers) {
    flower.update();
  }
  requestAnimationFrame(animate);
}
animate();

// Modal
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const modalContent2 = document.getElementById("mensaje");
const tikitokElm = document.getElementById("tikitok");
const vidContainer = document.getElementById('video-container');
const imgContainer = document.getElementById("imgPlay");

canvas.addEventListener("click", function(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (let flower of flowers) {
    if (flower.isButton && flower.isClicked(mouseX, mouseY)) {
      if (mensajes.length > 0) {
        const randomMessage = mensajes[Math.floor(Math.random() * mensajes.length)];

        if (randomMessage.tipo === 'url-video') {
            vidContainer.style.display = "block";
            const video = document.createElement('video');
            video.src = randomMessage.src;
            video.controls = true;
            video.width = 480;
            video.style.margin = "10px";
            vidContainer.appendChild(video);
        }
        
        modalContent2.innerHTML = `
          ${randomMessage.texto}
        `;

        if (randomMessage.tipo === "imagen") {
          const img = document.createElement("img");
          img.src = randomMessage.src;
          imgContainer.appendChild(img);
        }

        modal.style.display = "block";

        document.getElementById("myModal").onclick = () => {
            modal.style.display = "none";
            vidContainer.style.display = "none";
            vidContainer.innerHTML = '';
            imgContainer.innerHTML = '';
        }
      } else {
        alert("Los mensajes aún no se han cargado.");
      }
      break;
    }
  }
});

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

window.addEventListener("resize", () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});

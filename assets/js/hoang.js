let personalInfo = {
    "name": "Hoang Pham",
    "birthday": "12/15/1993",
    "phone": "+(84) 39-6389-762",
    "email": "phamquochoang1312@gmail.com",
    "behance": "https://www.behance.net/hoang2991",
    "youtube": "https://www.youtube.com/@hoangpham2991/videos",
    "facebook":"https://www.facebook.com/pham.q.hoang.9",
    "instagram": "https://www.instagram.com/hoang.pham1312",
    "address":"Son Tra District, Danang City, Vietnam"
}

let products = [
    {
        "title": "Duchess Dell",
        "link": "assets/imgs/exterior/CT5_1.png",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Duchess Dell",
        "link": "assets/imgs/exterior/CT5_2.png",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Duchess Dell",
        "link": "assets/imgs/exterior/CT5_3.png",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Kavila",
        "link": "assets/imgs/exterior/CT6_1.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Kavila",
        "link": "assets/imgs/exterior/CT6_2.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Kavila",
        "link": "assets/imgs/exterior/CT6_2.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Laos Villa",
        "link": "assets/imgs/exterior/CT7_1.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Laos Villa",
        "link": "assets/imgs/exterior/CT7_2.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Apartment",
        "link": "assets/imgs/interior/CT2.jpg",
        "category": "advertising new",
        "type": "image"
    },
    {
        "title": "Apartment",
        "link": "assets/imgs/interior/CT3.jpeg",
        "category": "advertising new",
        "type": "image"
    },
    {
        "title": "Apartment",
        "link": "assets/imgs/interior/CT4.jpg",
        "category": "advertising new",
        "type": "image"
    },
    {
        "title": "House in forest",
        "link": "assets/imgs/exterior/CT8.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "House in forest",
        "link": "assets/imgs/exterior/CT81.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "House in forest",
        "link": "assets/imgs/exterior/CT82.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Laos Villa",
        "link": "assets/imgs/exterior/CT91.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Laos Villa",
        "link": "assets/imgs/exterior/CT92.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "Laos Villa",
        "link": "assets/imgs/exterior/CT93.jpg",
        "category": "branding new",
        "type": "image"
    },
    {
        "title": "UE4_Datasmith_GPUlightmass",
        "link": "https://www.youtube.com/embed/9u7Zs6L1VEE",
        "category": "web new",
        "type": "video"
    },
    {
        "title": "LAOS VILLA - UE4Archviz",
        "link": "https://www.youtube.com/embed/Agr7VvFaLwQ",
        "category": "web new",
        "type": "video"
    },
    {
        "title": "Apartment Real-time Archviz - UE5 - Lumen",
        "link": "https://www.youtube.com/embed/KWiBrtacuoA",
        "category": "web new",
        "type": "video"
    },
    {
        "title": "Small walking path - UE5 - Lumen",
        "link": "https://www.youtube.com/embed/Xb21xVQAdS4",
        "category": "web new",
        "type": "video"
    },
    {
        "title": "Summer afternoon walk in the forest - UE5 - Lumen",
        "link": "https://www.youtube.com/embed/nCQ5JSaWKEY",
        "category": "web new",
        "type": "video"
    },
    {
        "title": "Summer afternoon walk in the forest - UE5 - Lumen",
        "link": "https://www.youtube.com/embed/hR_v1DPsbzY",
        "category": "web new",
        "type": "video"
    }
]
portFolio = "";
products.forEach(product => {
    if (product.type == "image") {
        portFolio +=
        "<div class='col-md-6 col-lg-4 "+ product.category +"'>"+
            "<div class='portfolio-item'>"+
                "<img src='"+ product.link +"' class='img-fluid' alt='"+ product.title +"'>"+
                "<div class='content-holder'>"+
                    "<a class='img-popup' href='"+ product.link + "'></a>"+
                    "<div class='text-holder'>"+
                        "<h6 class='title'>"+ product.title +"</h6>"+
                        "<p class='subtitle'>Click to view!</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    } else if (product.type == "video") {
        portFolio += 
        "<div class='col-md-6 col-lg-4 "+ product.category +"'>" +
            "<div class='portfolio-item'>" +
                "<iframe width='350' height='276' src='" + product.link +"' "+
                "title='"+ product.title +"' "+
                "frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' " +
                "allowfullscreen></iframe>" +
            "</div>" +
        "</div>"
    }
})

document.getElementById("portfolio-container").innerHTML = portFolio
let phone = document.getElementsByClassName("phone");
Array.from(phone).forEach(e => {
    e.innerHTML = personalInfo.phone;
})

let address = document.getElementsByClassName("address");
Array.from(address).forEach(e => {
    e.innerHTML = personalInfo.address;
})

let email = document.getElementsByClassName("email");
Array.from(email).forEach(e => {
    e.innerHTML = personalInfo.email;
})

let birthday = document.getElementsByClassName("birthday");
Array.from(birthday).forEach(e => {
    e.innerHTML = personalInfo.birthday;
})

let behance = document.getElementsByClassName("behance");
Array.from(behance).forEach(e => {
    e.innerHTML = personalInfo.behance;
})

let socialLinks = document.getElementsByClassName("social-link");
Array.from(socialLinks).forEach(e => {
    if (e.getElementsByTagName("i")[0].className == "ti-facebook") {
        e.href = personalInfo.facebook;
    }
    if (e.getElementsByTagName("i")[0].className == "ti-youtube") {
        e.href = personalInfo.youtube;
    }
    if (e.getElementsByTagName("i")[0].className == "ti-instagram") {
        e.href = personalInfo.instagram;
    }
    if (e.getElementsByTagName("i")[0].className == "ti-paint-bucket") {
        e.href = personalInfo.behance;
    }
    
})


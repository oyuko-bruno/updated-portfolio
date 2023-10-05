/* ========== Typing Animation ========*/
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Software Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ========== Aside Animation ========*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSelection = document.querySelectorAll(".section"),
      totalSelection = allSelection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSelection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSelection; i++)
        {
            allSelection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num)
      {
        allSelection[num].classList.add("back-section");
      }
      function showSection(element)
      {
        for(let i=0; i<totalSelection; i++)
        {
            allSelection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
            for(let i=0; i<totalNavList; i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) 
                {
                    navList[i].querySelector("a").classList.add("active");
                }
            }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSelection; i++)
                {
                    allSelection[i].classList.toggle("open");
                }
            }



     /* ========== CV download script starts ========== */

$(document).ready(function() {
    $('#btnDownload').click(function(e) {
        e.preventDefault();
        window.location.href = "Bruno oyuko cv.pdf";
    });
});



/* ========== Send Mail script starts ========== */

function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_2k15vc2", "template_mv4fwhd", params).then(function (res) {
        alert("Thank you for contacting me! " + res.status);
    })
}
import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    let text = document.getElementById('text') as HTMLElement
    let bote = document.getElementById('bote') as HTMLElement
    let umbralla = document.getElementById('umbralla') as HTMLElement
    let wood1 = document.getElementById('wood1') as HTMLElement
    let sun = document.getElementById('sun') as HTMLElement
    let treer = document.getElementById('treer') as HTMLElement
    let treell = document.getElementById('treell') as HTMLElement
    let img = document.getElementById('img') as HTMLElement
    AOS.init()

    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      if(value <350){
      text.style.marginTop = value * 2.5 + 'px'
      bote.style.top = value * 1.5 + 'px'
      umbralla.style.top = value * 1.5 + 'px'
      wood1.style.top = value * 1.5 + 'px'
      sun.style.top = value * 1.5 + 'px'
      treer.style.left = value * 1 + 'px'
      treell.style.left = value * -1 + 'px'
      img.style.filter = value * 10 + '%'

    }
    })
  }
 
 


}

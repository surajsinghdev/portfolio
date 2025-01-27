import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit{
  public ProfileImg: string = '../assets/profileimg.jpg';
  public placeholderImg: string = '../assets/profileimg.jpg';
  public IsOverflow: boolean = true;
  public aboutLabel: string = 'Read More...';
  public languages: string[] = ['JavaScript', 'TypeScript', 'C#', 'Java'];
  public framework: string[] = ['Angular','ASP.NET'];
  public backend: string[] = ['.NET'];
  public database: string[] = ['SQL', 'SQL Server'];
  public practices: string[] = ['Agile', 'Tortoise SVN' ];
  public tooltip: boolean = false;
  public tooltiptext: string = 'Mail';
  IsShowContactForm: boolean = false;
  public Socials: {mail: string, linkedin: string, instagram: string} = {
    mail: 'mailto:surajsinghdev885@gmail.com',
    linkedin: 'https://www.linkedin.com/in/suraj-profile/',
    instagram: 'https://www.instagram.com/_.ig_sss._/'
  }
  @ViewChild('aboutpara') aboutPara!: ElementRef;
  @ViewChild('scroll-top-box') scrollIcon!: ElementRef;
  @ViewChild('rightsection') scrollableSect!: ElementRef
  showScrollBtn: boolean = false;

  constructor(private Render: Renderer2, public SharedService: SharedService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // this.ShowScrollTopBtn();
  }
  
  ngAfterViewInit(): void {
    const paragraph = this.aboutPara?.nativeElement;
    this.IsOverflow = paragraph.scrollHeight > paragraph.offsetHeight;  // if paragraph has less content then, no ellipsis class is applied
  }

  DownloadImage(): void {
    const anchor = this.Render.createElement('a');
    const link = '../../assets/SURAJ_SINGH_Resume.pdf';
    anchor.href = link;
    anchor.download = 'SURAJ_SINGH_Resume.pdf';
    anchor.click();
    window.open(link, '_blank');
  }
  OnClickReadMore(): void {
    this.IsOverflow = false;
  }
  RedirectToSocial(type: number = 1 | 2 | 3): void {
    switch (type) {
      case 1: 
            window.open(this.Socials?.mail, '_blank');
            return
      case 2: 
            window.open(this.Socials?.linkedin, '_blank');
            return;
      case 3: 
            window.open(this.Socials?.instagram, '_blank');
            return;
    }
  }
  MouseOverSocialIcon(value: string = ''): void {
    this.tooltip = true;
    this.tooltiptext = value;
  }
  // ShowScrollTopBtn (): void {
  //   const elm = document.querySelector('.experience') as HTMLDivElement;
  //   const showElm = document.querySelector('.scroll-top-box') as HTMLDivElement;
  //   if (elm != null) {
  //     this.LoadWhenInView(elm, showElm);
  //   }
  // }

  // scrollToTop() {
  //   const element = this.document.querySelector('.right-sect');
  //   if (!element) return;
  //   element.scrollTop = 0;
  // }
  // used to load the element when in viewport
  // LoadWhenInView (element: HTMLDivElement, showElement: HTMLDivElement): void {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.3
  //   };
  //   const observer = new IntersectionObserver((entries)=> {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.Render.setStyle(showElement, 'display', 'flex');
  //         this.showScrollBtn = true;
  //       }
  //     });
  //   }, options);
  //   observer.observe(element);
  // }
}
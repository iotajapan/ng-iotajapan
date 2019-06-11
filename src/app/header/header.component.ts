import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/twitter.svg'));
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/github.svg'));
    iconRegistry.addSvgIcon(
      'meetup',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/meetup.svg'));
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/facebook.svg'));
    iconRegistry.addSvgIcon(
      'compass',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/compass.svg'));
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/instagram.svg'));
    iconRegistry.addSvgIcon(
      'docs',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/file-code.svg'));
    iconRegistry.addSvgIcon(
      'node',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/network-wired.svg'));
    iconRegistry.addSvgIcon(
      'discord',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/discord.svg'));
    iconRegistry.addSvgIcon(
      'slack',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/slack.svg'));
  }

  ngOnInit() {
  }

}

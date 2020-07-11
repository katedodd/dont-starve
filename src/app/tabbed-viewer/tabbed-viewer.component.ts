import { Component, ViewChild } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
} from '@angular/material/expansion';

@Component({
  selector: 'app-tabbed-viewer',
  templateUrl: './tabbed-viewer.component.html',
  styleUrls: ['./tabbed-viewer.component.css'],
})
export class TabbedViewerComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;
  @ViewChild(MatExpansionPanelHeader)
  expansionPanelHeader: MatExpansionPanelHeader;
  constructor() {}
}

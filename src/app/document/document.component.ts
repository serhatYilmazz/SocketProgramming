import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from '../document.service';
import {Subscription} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {Document} from '../document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  document: Document;
  private docSub: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docSub = this.documentService.currentDocument.pipe(
      startWith({id: '', doc: 'Select an existing document or create'})
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }
}

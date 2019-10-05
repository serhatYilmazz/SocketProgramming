import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DocumentService} from '../document.service';

@Component({
  selector: 'app-documenet-list',
  templateUrl: './documenet-list.component.html',
  styleUrls: ['./documenet-list.component.scss']
})
export class DocumenetListComponent implements OnInit, OnDestroy {

  documents: Observable<string[]>;
  currentDoc: string;

  private docSub: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.documents;
    this.documentService.documents.subscribe(doc => console.log(doc));
    this.docSub = this.documentService.currentDocument.subscribe(
      doc => {
        this.currentDoc = doc.id;
      }
    );
  }

  ngOnDestroy(): void {
    this.docSub.unsubscribe();
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }

  newDoc() {
    this.documentService.newDocument();
  }
}

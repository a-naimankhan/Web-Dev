import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums$: Observable<Album[]>;
  // filteredAlbums$: Observable<Album[]>;



// onSearch(event : any) {
//   const query = event.target.value.toLowerCase();
//   this.filteredAlbums$ = this.albums$.filter(a => a.title.toLocaleLowerCase().includes(query))
// }


  constructor(private svc: AlbumService) {
    this.albums$ = this.svc.getAlbums();
  }



  onDelete(id: number) {
    this.svc.deleteAlbum(id).subscribe(() => {
      // refresh list after delete
      this.albums$ = this.svc.getAlbums();
    });
  }


}

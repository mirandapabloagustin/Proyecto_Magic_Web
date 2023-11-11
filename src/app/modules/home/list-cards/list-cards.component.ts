import { Component, Input, OnInit } from '@angular/core';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  @Input() filterCardsValue: string = '';
  //variables
  dataApiResponse: any;
  dataApiResponseColection: any[] = [];
  searchText: string = '';
  page: number = 1;


  //constructor
  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }


  //metodos
  async ngOnInit(): Promise<void> {
    this.loadCards();
  }


  //@param: recibe un string con el nombre de la carta
  // @return: retorna un arreglo con la data de la api
  public async loadCards() {
    try {
      if (this.dataApiResponseColection.length === 0) {
        this.authApiScrifallService.getHeaderApi();
        let data = await this.authApiScrifallService.getCardsApi();
        this.dataApiResponseColection = data;
      }

    } catch (error) {
      console.log(error);
    }
  }

  public async searchElementApi() {
    console.log("soy lista" +this.filterCardsValue);
    try {
      let data = await this.authApiScrifallService.getCardsNameApi(this.searchText,this.filterCardsValue);
      this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
      this.dataApiResponseColection = data;

    } catch (error) {
      console.log(error);
    }
  }





  public async nextPage() {

  }


  public async previousPage() {

  }




}

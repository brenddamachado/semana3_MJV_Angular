import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {

  title: string = 'Área Dos Desenvolvedores';
 card: cards[] = [];

  constructor() {
    this.card= [
      { id: 9, img: 'https://vocerh.abril.com.br/wp-content/uploads/2022/06/Eduardo_Alves.jpg?quality=70&strip=info&w=1280&h=720&crop=1', nome: 'Vitor Gabriel', cargo: 'Desenvolvedor Pleno', empresa: "📚 Livraria" },
      { id: 5, img: 'https://vocerh.abril.com.br/wp-content/uploads/2021/11/estagio-negro.jpeg?quality=70&strip=info&w=1280&h=720&crop=1', nome: 'Elisangela Machado', cargo: 'Desenvolvedora Júnior', empresa: "📚 Livraria" },
      { id: 8, img: 'https://f.i.uol.com.br/fotografia/2019/10/04/15702411855d97faa1e1ab3_1570241185_3x2_md.jpg', nome: 'Bruna Lima', cargo: 'Desenvolvedora Pleno', empresa: "📚 Livraria" },
      { id: 6, img: 'https://www.napratica.org.br/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-22-at-18.21.01.jpeg', nome: 'Brenda Machado', cargo: 'Desenvolvedora Sênio', empresa: "📚 Livraria" },
     
    ];
  }

  ngOnInit(): void {

  }

}

interface cards {
  id: number;
  img: any;
  nome: string;
  cargo: string;
  empresa: string;
}
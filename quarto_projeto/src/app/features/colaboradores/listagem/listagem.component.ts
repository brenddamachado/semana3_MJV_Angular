import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {

  title: string = 'Área dos Colaboradores';
  colab: Colabs[] = [];

  constructor() {
    this.colab = [
      { id: 9, img: 'https://vocerh.abril.com.br/wp-content/uploads/2022/06/Eduardo_Alves.jpg?quality=70&strip=info&w=1280&h=720&crop=1', nome: 'Vitor Gabriel', cargo: 'Desenvolvedor Pl', empresa: "📚 Livraria" },
      { id: 5, img: 'https://vocerh.abril.com.br/wp-content/uploads/2021/11/estagio-negro.jpeg?quality=70&strip=info&w=1280&h=720&crop=1', nome: 'Elisangela Machado', cargo: 'Desenvolvedora jr', empresa: "📚 Livraria" },
      { id: 8, img: 'https://t4.ftcdn.net/jpg/04/91/98/55/360_F_491985520_6sSd5jmpm43Oo094YvosIAzgMP4vI5PX.jpg', nome: 'Bruna Lima', cargo: 'Desenvolvedora Pl', empresa: "📚 Livraria" },
      { id: 6, img: 'https://img.freepik.com/premium-photo/confident-african-american-business-woman_33839-2893.jpg', nome: 'Brenda Machado', cargo: 'Desenvolvedora Pl', empresa: "📚 Livraria" },
     
    ];
  }

  ngOnInit(): void {

  }

}

interface Colabs {
  id: number;
  img: any;
  nome: string;
  cargo: string;
  empresa: string;
}
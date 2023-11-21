import Cabecalho from './Cabecalho';
import img1 from '../assets/acompanhamento.png'
import img2 from '../assets/monitoramento.png'
import img3 from '../assets/individualizacao.png'
import logo from '../assets/monitoring.png'



export default function Layout() {
  return (
      <div className='layout'>
        <div className='container'>
        <Cabecalho />
        <main>
          <div className='parte1'>
            <section className='section1'>
              <img src={logo} alt="imagem" className='logo' />
              <article>
                <h2>Monitoramento<br/>em tempo real</h2>
                <div className='textoExtra'>
                  <p>Utilizando uma API que será alimentada pelos sistemas das várias clínicas parceiras da Hapvida criará a oportunidade de melhorar o atendimento ao cliente em geral, providenciando informações importantes e também a entrega de exames, tudo pela mesma plataforma.</p>
                </div>
              </article>
            </section>
            <section className='section2'>
              <article>
                <div>
                  <h3>Humanização</h3>
                  <p>Atualmente o sistema da Hapvida é descentralizado, onde serve apenas como uma plataforma para marcar consultas e entre outros. </p>
                </div>
                <hr />
                <div>
                  <h3>Inteligência</h3>
                  <p>Com esta API terá uma grande automatização do sistema, onde somente será necessário colocar localização, horários de funcionamento e contatos da clínica manualmente</p>
                </div>
                <hr />
                <div>
                  <h3>Contato direto</h3>
                  <p>A API será integrada ao sistema de clínicas parceiras, identificando os clientes que estão lá pelo plano de saúde e automaticamente recolhendo todas as informações necessárias para o cliente, incluindo os exames.</p>
                </div>
              </article>
            </section>
          </div>
          <h1 className='tituloVantagens'>Serviços</h1>
          <section className='section3'>
            <article className='vantagem'>
              <img src={img1} alt="" />
              <div className='textoVantagem'>
                <h1>01</h1>
                <h3>Acompanhamento</h3>
                <p>Com tudo disponível no mesmo lugar, a experiência do cliente se torna mais fácil e prática</p>
              </div>
            </article>
            <article className='vantagem'>
              <img src={img2} alt="" />
              <div className='textoVantagem'>
                <h1>02</h1>
                <h3>Monitoramento</h3>
                <p>Com a API contendo muitos dados importantes, fica mais fácil para analisar certos dados</p>
              </div>
            </article>
            <article className='vantagem'>
              <img src={img3} alt="" />
              <div className='textoVantagem'>
                <h1>03</h1>
                <h3>Individualização</h3>
                <p>Com o cliente dependendo apenas de um site, fica mais difícil dele se deparar com problemas</p>
              </div>
            </article>
          </section>
        </main>
        </div>
      </div>
  );
}

import ArticleLayout from '@/layouts/article';

const pageInfo = {
  title: 'Uses',
  description: 'The hardware and software I use for work and life.',
};

export default function Uses() {
  return (
    <ArticleLayout {...pageInfo}>
      <h2>Hardware</h2>
      <h3>On my desk</h3>
      <ul>
        <li>
          Custom PC build
          <ul>
            <li>Intel Core i7-9700F</li>
            <li>be quiet! Pure Rock</li>
            <li>ASRock H370 Pro4</li>
            <li>2x8GB Kingston FURY DDR4-2666 CL16</li>
            <li>120GB Samsung 850 EVO SSD</li>
            <li>500GB Samsung 850 EVO SSD</li>
            <li>Gigabyte GeForce RTX 2060 SUPER 8GB WINDFORCE OC</li>
            <li>NZXT S340</li>
            <li>Seasonic M12II 520W</li>
            <li>2x120mm ARCTIC F12 Pro</li>
          </ul>
        </li>
        <li>24″ Dell U2417H</li>
        <li>Logitech MX Master 3 / MX Anywhere 2S</li>
        <li>Ducky One 2 SF</li>
        <li>Bose SoundLink Mini</li>
        <li>Sony WH-1000XM3</li>
      </ul>
      <h3>On the go</h3>
      <ul>
        <li>iPhone 12</li>
        <li>AirPods Pro</li>
        <li>Apple Watch Series 5</li>
        <li>Kindle Paperwhite 3</li>
      </ul>
      <h2>Software</h2>
      <h3>Work</h3>
      <ul>
        <li>Visual Studio Code</li>
        <li>Git / GitHub</li>
        <li>Firefox / Chrome</li>
      </ul>
      <h3>Life</h3>
      <ul>
        <li>Google Mail / Calendar / Drive</li>
        <li>Todoist</li>
        <li>Notion</li>
        <li>1Password</li>
        <li>Pocket</li>
        <li>YouTube (Premium + Music)</li>
      </ul>
      <h3>Powering this site</h3>
      <ul>
        <li>Vercel</li>
        <li>Hover</li>
      </ul>
    </ArticleLayout>
  );
}

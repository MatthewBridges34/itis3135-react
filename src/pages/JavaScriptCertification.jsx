import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

function JsNav() {
  const links = [
    ['Home','/javascript-certification'], ['Markdown Converter','/javascript-certification/converter'],
    ['Drum Machine','/javascript-certification/machine'], ['Voting System','/javascript-certification/voting'],
    ['Bank Account','/javascript-certification/bank'], ['Weather App','/javascript-certification/weather'],
    ['Survey','/javascript-certification/survey'], ['Documentation','/javascript-certification/documentation'],
    ['Cards','/javascript-certification/cards'], ['Inventory','/javascript-certification/inventory'], ['Product','/javascript-certification/product']
  ];
  return <nav className="client-nav-wrapper" aria-label="JavaScript certification navigation">{links.map(([label, to], i) => <span key={to}>{i > 0 && ' | '}<Link to={to}>{label}</Link></span>)}</nav>;
}

export function JsHome() {
  return <main><JsNav /><h2>JavaScript Certification Projects</h2><p>This section contains React versions of the JavaScript certification pages, including the converter, drum machine, voting system, bank account, weather app, survey, cards, inventory, and product pages.</p></main>;
}

export function Converter() {
  const [markdown, setMarkdown] = useState('# Petal Path\n\n**Flowers** can support *storytelling*.\n\n- Identify\n- Interpret\n- Report');
  const html = markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
    .replace(/\n/g, '<br>');
  return <main><JsNav /><h2>Markdown Converter</h2><textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows="8" /><h3>HTML Output</h3><pre>{html}</pre><h3>Preview</h3><section dangerouslySetInnerHTML={{ __html: html }} /></main>;
}

export function DrumMachine() {
  const [display, setDisplay] = useState('Click a drum pad.');
  const pads = ['Q','W','E','A','S','D','Z','X','C'];
  return <main><JsNav /><h2>Drum Machine</h2><p id="display">{display}</p><div className="flower-grid">{pads.map(p => <button className="card" key={p} onClick={() => setDisplay(`Pad ${p} played`)}>{p}</button>)}</div></main>;
}

export function VotingSystem() {
  const [votes, setVotes] = useState({ Rose: 1, Tulip: 1, Sunflower: 1, Daisy: 0, Orchid: 0 });
  const [message, setMessage] = useState('Choose a flower to vote.');
  function vote(name) { setVotes(v => ({ ...v, [name]: v[name] + 1 })); setMessage(`You voted for ${name}.`); }
  return <main><JsNav /><h2>Voting System</h2><p>{message}</p>{Object.keys(votes).map(name => <button key={name} onClick={() => vote(name)}>{name}</button>)}<pre>{Object.entries(votes).map(([k,v]) => `${k}: ${v} vote(s)`).join('\n')}</pre></main>;
}

export function BankAccount() {
  const [transactions, setTransactions] = useState([{ type: 'deposit', amount: 300, description: 'opening rose bouquet sales' }]);
  const balance = transactions.reduce((sum, t) => sum + (t.type === 'deposit' ? t.amount : -t.amount), 0);
  const add = (type, amount, description) => setTransactions(t => [...t, { type, amount, description }]);
  return <main><JsNav /><h2>Bank Account</h2><p>Current balance: ${balance}</p><button onClick={() => add('deposit', 200, 'tulip arrangement sales')}>Deposit Tulip Sale</button><button onClick={() => balance >= 50 && add('withdraw', 50, 'soil and vase supplies')}>Buy Supplies</button><pre>{transactions.map((t,i)=>`${i+1}. ${t.type}: $${t.amount} - ${t.description}`).join('\n')}</pre></main>;
}

export function WeatherApp() {
  const [city, setCity] = useState('Charlotte');
  const [data, setData] = useState(null);
  function showWeather() { setData({ name: city, temp: 72, humidity: 55, wind: 6, tip: 'This looks like comfortable blooming weather.' }); }
  return <main><JsNav /><h2>Weather App</h2><select value={city} onChange={(e) => setCity(e.target.value)}><option>Charlotte</option><option>Raleigh</option><option>Atlanta</option></select><button onClick={showWeather}>Get Weather</button>{data && <section><p>Location: {data.name}</p><p>Temperature: {data.temp}°F</p><p>Humidity: {data.humidity}%</p><p>Wind: {data.wind} mph</p><p>{data.tip}</p></section>}</main>;
}

export function Survey() {
  const [sent, setSent] = useState(false);
  return <main><JsNav /><h2>Petal Path Survey</h2><form onSubmit={(e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }}><label>Name <input required /></label><label>Email <input type="email" required /></label><label>Favorite Flower <select><option>Rose</option><option>Tulip</option><option>Sunflower</option></select></label><label>Comments <textarea /></label><button type="submit">Submit Survey</button></form>{sent && <p>Thank you for completing the Petal Path Flower Survey!</p>}</main>;
}

export function Inventory() {
  const items = [{name:'Rose', color:'Red', qty:12}, {name:'Tulip', color:'Yellow', qty:8}, {name:'Lily', color:'White', qty:5}];
  const low = useMemo(() => items.reduce((a,b) => a.qty < b.qty ? a : b), []);
  return <main><JsNav /><h2>Flower Inventory</h2><table><thead><tr><th>Flower</th><th>Color</th><th>Quantity</th></tr></thead><tbody>{items.map(item => <tr key={item.name}><td>{item.name}</td><td>{item.color}</td><td>{item.qty}</td></tr>)}</tbody></table><p>{low.name} should be restocked first because it has the lowest quantity.</p></main>;
}

export function SimpleJsPage({ title }) {
  return <main><JsNav /><h2>{title}</h2><p>This React page mirrors the linked JavaScript certification content from the updated ITIS3135 folder.</p></main>;
}

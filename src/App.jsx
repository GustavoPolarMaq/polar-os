import { useState, useEffect, useRef } from "react";
const LOGO_B64="data:image/jpeg;base64,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";


const C={
  navy:"#F0F0EE",
  navyMid:"#FFFFFF",
  navyLight:"#E0DEDB",
  amber:"#CC1F1F",
  white:"#1A1A1A",
  gray:"#6B6B6B",
  red:"#B71C1C",
  green:"#2E7D32",
  steel:"#1565C0",
  surface:"#F7F6F4",
  purple:"#6A1B9A",
  orange:"#E65100",
  teal:"#00695C",
};

const SERVICOS = [
  {n:"Troca de resistência",h:60},{n:"Instalação de chuveiro",h:90},
  {n:"Troca de torneira",h:60},{n:"Instalação de vaso sanitário",h:90},
  {n:"Montagem de armário",h:150},{n:"Instalação de aquecedor",h:120},
  {n:"Gás – instalação de fogão",h:90},{n:"Gás – ramal/revisão",h:180},
  {n:"Serviço personalizado",h:60}
];

const USUARIOS_PADRAO = [
  {id:"u0",nome:"Admin",login:"admin",senha:"admin123",role:"admin"},
  {id:"u1",nome:"Mauro",login:"mauro",senha:"polar123",role:"gerencia"},
  {id:"u2",nome:"Técnico",login:"tecnico",senha:"tecnico123",role:"tecnico"},
];

const CONFIG_PADRAO = {
  precoHora:120, impostos:11.5, comissao:8,
  imprevisto:10, ferramentas:10, deslocamento:10, custoMOHora:35,
  tempoFeedbackMin:60,
  msgFeedback:"Olá {nome}! 😊 Passando para saber se ficou satisfeito com o serviço realizado hoje pela equipe Polar. Sua opinião é muito importante para nós! Como você avalia o atendimento de 1 a 5? ⭐",
};

const STATUS_COLOR = {
  orcamento:C.amber, aprovado_gerente:C.green, em_andamento:C.steel,
  aguardando_conclusao:C.purple, concluida:C.green, cancelada:C.red,
  devolvida:C.red, em_garantia:C.teal,
};
const STATUS_LABEL = {
  orcamento:"Orçamento — aguard. aprovação cliente",
  aprovado_gerente:"Aprovado — pronto para iniciar",
  em_andamento:"Em andamento",
  aguardando_conclusao:"Concluída — aguard. revisão",
  concluida:"Concluída", cancelada:"Cancelada", devolvida:"Devolvida",
  em_garantia:"Em garantia",
};

// ── HELPERS ───────────────────────────────────────────────────────────────
const fmtR = v => Number(v||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const fmtD = s => s ? new Date(s).toLocaleDateString("pt-BR") : "—";
const fmtDH = iso => iso ? new Date(iso).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}) : "—";
const fmtH = iso => iso ? new Date(iso).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "—";
const hoje = () => new Date().toISOString().split("T")[0];
const isHoje = iso => iso && iso.split("T")[0] === hoje();
async function genNum() {
  const ano = new Date().getFullYear();
  const key = "seq_" + ano;
  const db = getDb();
  if(db){
    try{
      const ref = db.collection("polar_dados").doc(key);
      const novoSeq = await db.runTransaction(async (tx) => {
        const doc = await tx.get(ref);
        const atual = doc.exists ? (doc.data().valor||0) : 0;
        const proximo = atual + 1;
        tx.set(ref, { valor: proximo, atualizadoEm: new Date().toISOString() });
        return proximo;
      });
      return ano + "-" + String(novoSeq).padStart(4, "0");
    }catch(e){}
  }
  let seq = await storageGet(key) || 0;
  seq = seq + 1;
  await storageSet(key, seq);
  return ano + "-" + String(seq).padStart(4, "0");
}

function formatTel(v) {
  const d = v.replace(/\D/g,"").slice(0,11);
  if(d.length<=2)return d.length?`(${d}`:"";
  if(d.length<=6)return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if(d.length<=10)return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
}

function calcValorServico(hEst,cfg,mats=[]){
  const h=(parseFloat(hEst)||0)/60; // minutos -> horas
  const totMat=mats.reduce((a,m)=>a+(parseFloat(m.v)||0),0);
  const mo=h*cfg.precoHora;
  const variavel=mo*((cfg.imprevisto+cfg.ferramentas)/100);
  return mo+variavel+cfg.deslocamento+totMat;
}

function calcMargem(receita,horasReais,cfg,horasGarantia=0){
  const imp=receita*(cfg.impostos/100);
  const mo=cfg.custoMOHora*(horasReais+horasGarantia); // garantia entra no custo MO
  const com=receita*(cfg.comissao/100);
  const impr=receita*(cfg.imprevisto/100);
  const ferr=receita*(cfg.ferramentas/100);
  const desl=cfg.deslocamento;
  const m=receita-imp-mo-com-impr-ferr-desl;
  return{imp,mo,com,impr,ferr,desl,m,pct:receita>0?(m/receita)*100:0,custoGarantia:cfg.custoMOHora*horasGarantia};
}

function diffHoras(isoA,isoB){
  if(!isoA||!isoB)return null;
  return Math.max(0,parseFloat(((new Date(isoB)-new Date(isoA))/3600000).toFixed(2)));
}

function somaHoras(trechos=[]){
  return trechos.reduce((acc,d)=>{
    if(d.saida&&d.retorno)return acc+(diffHoras(d.saida,d.retorno)||0);
    return acc;
  },0);
}

let _db=null;
function getDb(){
  if(_db)return _db;
  if(typeof window!=="undefined"&&window.firebase&&window.firebase.firestore){
    _db=window.firebase.firestore();
  }
  return _db;
}
async function storageGet(k){
  try{
    const db=getDb();
    if(!db){const v=localStorage.getItem("polar_"+k);return v?JSON.parse(v):null;}
    const doc=await db.collection("polar_dados").doc(k).get();
    if(!doc.exists)return null;
    return doc.data().valor;
  }catch(e){
    try{const v=localStorage.getItem("polar_"+k);return v?JSON.parse(v):null;}catch(e2){return null;}
  }
}
async function storageSet(k,v){
  const db=getDb();
  if(!db){
    // Sem Firebase — salva só local (modo offline)
    try{localStorage.setItem("polar_"+k,JSON.stringify(v));}catch(e2){}
    return false;
  }
  // Tenta Firebase com timeout de 10s
  try{
    await Promise.race([
      db.collection("polar_dados").doc(k).set({valor:v,atualizadoEm:new Date().toISOString()}),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),10000))
    ]);
    localStorage.setItem("polar_"+k,JSON.stringify(v)); // cache local
    return true;
  }catch(e){
    console.error("Firebase storageSet falhou:",k,e.message);
    try{localStorage.setItem("polar_"+k,JSON.stringify(v));}catch(e2){}
    return false; // retorna false para indicar falha
  }
}

// ── ESTILOS ───────────────────────────────────────────────────────────────
const inp={width:"100%",background:"#F7F6F4",border:"1px solid #D8D5D0",borderRadius:8,padding:"10px 12px",color:"#1A1A1A",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"};
const card={background:"#FFFFFF",borderRadius:12,padding:20,marginBottom:16,border:"1px solid #E0DEDB",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"};
const lbl={fontSize:11,color:"#555555",fontWeight:700,letterSpacing:0.8,textTransform:"uppercase",marginBottom:6,display:"block"};
const row={display:"flex",gap:12,marginBottom:12,flexWrap:"wrap"};
const btnP={background:C.amber,color:"#FFFFFF",border:"none",borderRadius:8,padding:"11px 22px",fontWeight:700,fontSize:14,cursor:"pointer"};
const btnS={background:"#F0F0EE",color:"#444444",border:"1px solid #D0CEC9",borderRadius:8,padding:"10px 18px",fontWeight:600,fontSize:13,cursor:"pointer"};
const btnG={background:"#E8F5E9",color:"#2E7D32",border:"1px solid #A5D6A7",borderRadius:8,padding:"9px 18px",fontWeight:600,fontSize:13,cursor:"pointer"};
const btnR={background:"#FFEBEE",color:"#B71C1C",border:"1px solid #FFCDD2",borderRadius:8,padding:"9px 18px",fontWeight:600,fontSize:13,cursor:"pointer"};
const btnPu={background:"#F3E5F5",color:"#6A1B9A",border:"1px solid #CE93D8",borderRadius:8,padding:"9px 18px",fontWeight:600,fontSize:13,cursor:"pointer"};
const btnT={background:"#E0F2F1",color:"#00695C",border:"1px solid #80CBC4",borderRadius:8,padding:"9px 18px",fontWeight:600,fontSize:13,cursor:"pointer"};

// ── COMPRESSÃO DE IMAGEM ──────────────────────────────────────────────────
function comprimirImagem(file, maxW=1200, qualidade=0.72) {
  return new Promise((resolve, reject) => {
    const isVideo = file.type.startsWith("video/");
    if (isVideo) {
      // vídeos: só armazena metadados + thumbnail se possível; base64 full é inviável
      // guardamos nome, tipo, tamanho e um dataURL thumb via canvas se for mp4
      const url = URL.createObjectURL(file);
      resolve({ tipo:"video", nome:file.name, mime:file.type, src:url, tamanho:file.size, ts:new Date().toISOString() });
      return;
    }
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = ev => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxW / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve({ tipo:"imagem", nome:file.name, mime:"image/jpeg", src:canvas.toDataURL("image/jpeg", qualidade), tamanho:file.size, ts:new Date().toISOString() });
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ── COMPONENTE: PAINEL DE MÍDIA ───────────────────────────────────────────
function PainelMidia({ titulo, cor, obrigatorio, itens, onChange, somenteLeitura }) {
  const [ampliado, setAmpliado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const inputRef = useRef(null);

  async function handleFiles(files) {
    if (!files || files.length === 0) return;
    setCarregando(true);
    const novos = [];
    for (const f of Array.from(files)) {
      try {
        const item = await comprimirImagem(f);
        novos.push({ ...item, id: Date.now() + Math.random() });
      } catch (e) { console.error("Erro ao processar arquivo", e); }
    }
    onChange([...itens, ...novos]);
    setCarregando(false);
  }

  function remover(id) { onChange(itens.filter(x => x.id !== id)); }

  const faltando = obrigatorio && itens.length === 0;

  return (
    <div style={{ ...card, borderColor: faltando ? C.red + "88" : cor + "44" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: faltando ? C.red : cor, textTransform: "uppercase" }}>
            {titulo} {obrigatorio && <span style={{ color: C.red }}>*</span>}
          </div>
          {faltando && <div style={{ fontSize: 11, color: C.red, marginTop: 4 }}>⚠ Pelo menos 1 foto/vídeo obrigatório</div>}
        </div>
        <div style={{ fontSize: 12, color: C.gray }}>{itens.length} arquivo{itens.length !== 1 ? "s" : ""}</div>
      </div>

      {/* grade de miniaturas */}
      {itens.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px,1fr))", gap: 8, marginBottom: 14 }}>
          {itens.map(item => (
            <div key={item.id} style={{ position: "relative", borderRadius: 8, overflow: "hidden", background: C.surface, border: `1px solid ${C.navyLight}`, aspectRatio: "1" }}>
              {item.tipo === "imagem" ? (
                <img src={item.src} alt={item.nome}
                  style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setAmpliado(item)} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 6 }}
                  onClick={() => setAmpliado(item)}>
                  <div style={{ fontSize: 28 }}>🎬</div>
                  <div style={{ fontSize: 9, color: C.gray, marginTop: 4, textAlign: "center", wordBreak: "break-all" }}>{item.nome}</div>
                </div>
              )}
              {!somenteLeitura && (
                <button onClick={() => remover(item.id)}
                  style={{ position: "absolute", top: 4, right: 4, background: C.red, color: "#fff", border: "none", borderRadius: "50%", width: 20, height: 20, cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>✕</button>
              )}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.55)", fontSize: 9, color: "#fff", padding: "2px 4px", textAlign: "center" }}>
                {new Date(item.ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* botões de upload */}
      {!somenteLeitura && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <label style={{ ...btnG, display: "flex", alignItems: "center", gap: 6, cursor: "pointer", borderColor: cor + "66", color: cor, background: cor + "18", userSelect: "none" }}>
            📷 Câmera
            <input type="file" accept="image/*" capture="camera"
              style={{ display: "none" }}
              onChange={e => handleFiles(e.target.files)} />
          </label>
          <label style={{ ...btnS, display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none" }}>
            🎬 Vídeo
            <input type="file" accept="video/*" capture="camcorder"
              style={{ display: "none" }}
              onChange={e => handleFiles(e.target.files)} />
          </label>
          <label style={{ ...btnS, display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none" }}>
            📁 Galeria
            <input type="file" accept="image/*,video/*" multiple
              style={{ display: "none" }}
              onChange={e => handleFiles(e.target.files)} />
          </label>
          {carregando && <span style={{ fontSize: 12, color: C.gray, alignSelf: "center" }}>⏳ Processando...</span>}
        </div>
      )}

      {/* lightbox */}
      {ampliado && (
        <div onClick={() => setAmpliado(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          {ampliado.tipo === "imagem" ? (
            <img src={ampliado.src} alt={ampliado.nome}
              style={{ maxWidth: "100%", maxHeight: "90vh", borderRadius: 8, boxShadow: "0 0 40px #000" }}
              onClick={e => e.stopPropagation()} />
          ) : (
            <div style={{ textAlign: "center" }} onClick={e => e.stopPropagation()}>
              <video src={ampliado.src} controls playsInline onClick={e=>e.stopPropagation()} style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 8, display: "block" }} />
              <div style={{ color: "#fff", marginTop: 8, fontSize: 13 }}>{ampliado.nome}</div>
            </div>
          )}
          <button onClick={() => setAmpliado(null)}
            style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", color: "#fff", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
        </div>
      )}
    </div>
  );
}


// ── COMPONENTE: ASSINATURA DO CLIENTE ────────────────────────────────────
function CanvasAssinatura({canvasRef,somenteLeitura,temTraco,setTemTraco,jaAssinado,onTracoFinalizado}){
  const [desenhando,setDesenhando]=useState(false);
  function getPos(e,cv){
    const r=cv.getBoundingClientRect();
    const sx=cv.width/r.width,sy=cv.height/r.height;
    if(e.touches)return{x:(e.touches[0].clientX-r.left)*sx,y:(e.touches[0].clientY-r.top)*sy};
    return{x:(e.clientX-r.left)*sx,y:(e.clientY-r.top)*sy};
  }
  function iniciar(e){if(somenteLeitura)return;e.preventDefault();const cv=canvasRef.current;const p=getPos(e,cv);cv.getContext("2d").beginPath();cv.getContext("2d").moveTo(p.x,p.y);setDesenhando(true);}
  function mover(e){if(!desenhando||somenteLeitura)return;e.preventDefault();const cv=canvasRef.current;const ctx=cv.getContext("2d");const p=getPos(e,cv);ctx.lineWidth=2.5;ctx.lineCap="round";ctx.lineJoin="round";ctx.strokeStyle="#1A1A1A";ctx.lineTo(p.x,p.y);ctx.stroke();if(!temTraco)setTemTraco(true);}
  function parar(e){if(!desenhando)return;e.preventDefault();setDesenhando(false);if(onTracoFinalizado&&canvasRef.current)onTracoFinalizado(canvasRef.current);}
  return(
    <div style={{position:"relative",borderRadius:10,overflow:"hidden",border:"2px dashed "+(jaAssinado?C.green+"66":C.navyLight),background:"#FFFFFF",touchAction:"none",width:"100%",height:"100%"}}>
      <canvas ref={canvasRef} width={900} height={400}
        style={{display:"block",width:"100%",height:"100%",cursor:somenteLeitura?"default":"crosshair"}}
        onMouseDown={iniciar} onMouseMove={mover} onMouseUp={parar} onMouseLeave={parar}
        onTouchStart={iniciar} onTouchMove={mover} onTouchEnd={parar}/>
      {!temTraco&&!jaAssinado&&!somenteLeitura&&(
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}>
          <span style={{color:"#AAAAAA",fontSize:18}}>✍ Cliente assina aqui</span>
        </div>
      )}
    </div>
  );
}

function PainelAssinatura({ assinatura, onChange, somenteLeitura, autoConfirmar }) {
  const canvasRef = useRef(null);
  const canvasFullRef = useRef(null);
  const [temTraco, setTemTraco] = useState(false);
  const [nomeCliente, setNomeCliente] = useState((assinatura&&assinatura.nome)||"");
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if ((assinatura&&assinatura.img) && canvasRef.current) {
      const img = new Image();
      img.onload = () => {
        const cv = canvasRef.current;
        if(!cv) return;
        cv.getContext("2d").clearRect(0,0,cv.width,cv.height);
        cv.getContext("2d").drawImage(img,0,0,cv.width,cv.height);
      };
      img.src = assinatura.img;
      setTemTraco(true);
    }
  }, []);

  // Ao abrir fullscreen, copiar traçado do canvas normal para o fullscreen
  useEffect(() => {
    if(fullscreen && canvasFullRef.current && canvasRef.current) {
      setTimeout(()=>{
        const cvF=canvasFullRef.current;
        const cvN=canvasRef.current;
        if(!cvF||!cvN)return;
        cvF.getContext("2d").clearRect(0,0,cvF.width,cvF.height);
        cvF.getContext("2d").drawImage(cvN,0,0,cvF.width,cvF.height);
      },50);
    }
  }, [fullscreen]);

  function limpar() {
    const cv = canvasRef.current;
    if(cv) cv.getContext("2d").clearRect(0,0,cv.width,cv.height);
    const cvF = canvasFullRef.current;
    if(cvF) cvF.getContext("2d").clearRect(0,0,cvF.width,cvF.height);
    setTemTraco(false);
    onChange(null);
  }

  function confirmar(fromRef) {
    const ref = fromRef||canvasRef;
    if(!temTraco) return;
    // Copiar do fullscreen para o normal antes de salvar
    if(fromRef===canvasFullRef && canvasRef.current && canvasFullRef.current){
      const cvN=canvasRef.current;
      const cvF=canvasFullRef.current;
      cvN.getContext("2d").clearRect(0,0,cvN.width,cvN.height);
      cvN.getContext("2d").drawImage(cvF,0,0,cvN.width,cvN.height);
    }
    const img = canvasRef.current.toDataURL("image/png");
    onChange({ img, nome: nomeCliente.trim(), ts: new Date().toISOString() });
    setFullscreen(false);
  }

  const jaAssinado = !!(assinatura&&assinatura.img);
  const corBorda = jaAssinado ? C.green+"66" : somenteLeitura ? C.navyLight : C.red+"66";

  return (
    <>
      {/* MODAL FULLSCREEN */}
      {fullscreen&&(
        <div style={{position:"fixed",inset:0,background:"#FFFFFF",zIndex:1000,display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",borderBottom:"2px solid #CC1F1F",background:"#FFFFFF",flexShrink:0}}>
            <div style={{fontSize:13,fontWeight:700,color:"#1A1A1A"}}>✍ Assinatura do Cliente</div>
            <div style={{display:"flex",gap:8}}>
              <button style={{...btnS,padding:"8px 14px",fontSize:13}} onClick={()=>{limpar();}}>🗑 Limpar</button>
              <button style={{...btnG,padding:"8px 14px",fontSize:13,opacity:temTraco?1:0.45}} onClick={()=>confirmar(canvasFullRef)}>✓ Confirmar</button>
              <button style={{...btnR,padding:"8px 14px",fontSize:13}} onClick={()=>setFullscreen(false)}>✕ Fechar</button>
            </div>
          </div>
          <div style={{flex:1,padding:16,display:"flex",flexDirection:"column",gap:12}}>
            <input style={inp} value={nomeCliente} onChange={e=>setNomeCliente(e.target.value)} placeholder="Nome do cliente (opcional)"/>
            <div style={{flex:1,minHeight:0}}>
              <CanvasAssinatura canvasRef={canvasFullRef} somenteLeitura={false} temTraco={temTraco} setTemTraco={setTemTraco} jaAssinado={jaAssinado}/>
            </div>
          </div>
        </div>
      )}

      {/* CARD NORMAL */}
      <div style={{...card, borderColor:corBorda}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:jaAssinado?C.green:C.red,textTransform:"uppercase"}}>
              Assinatura do Cliente <span style={{color:C.red}}>*</span>
            </div>
            {jaAssinado
              ? <div style={{fontSize:12,color:C.green,marginTop:4}}>
                  ✓ Assinado em {new Date(assinatura.ts).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}
                  {assinatura.nome&&<span style={{color:C.gray}}> · {assinatura.nome}</span>}
                </div>
              : !somenteLeitura&&<div style={{fontSize:11,color:C.red,marginTop:4}}>⚠ Obrigatório para concluir</div>
            }
          </div>
          <div style={{display:"flex",gap:8,flexShrink:0}}>
            {!somenteLeitura&&!jaAssinado&&(
              <button style={{...btnP,padding:"8px 14px",fontSize:13}} onClick={()=>setFullscreen(true)}>
                ⛶ Tela cheia
              </button>
            )}
            {!somenteLeitura&&jaAssinado&&(
              <button style={btnR} onClick={limpar}>Refazer</button>
            )}
          </div>
        </div>

        {/* canvas compacto no card */}
        <div style={{position:"relative",borderRadius:10,overflow:"hidden",border:"2px dashed "+(jaAssinado?C.green+"66":C.navyLight),background:C.surface,marginBottom:12,touchAction:"none",height:160}}>
          <CanvasAssinatura canvasRef={canvasRef} somenteLeitura={somenteLeitura||(jaAssinado&&!autoConfirmar)} temTraco={temTraco} setTemTraco={setTemTraco} jaAssinado={jaAssinado}
              onTracoFinalizado={autoConfirmar?cv=>{if(!cv)return;const img=cv.toDataURL("image/png");onChange({img,nome:nomeCliente.trim(),ts:new Date().toISOString()});}:null}/>
        </div>

        {!somenteLeitura&&!jaAssinado&&(
          <>
            <label style={lbl}>Nome do cliente (opcional)</label>
            <input style={{...inp,marginBottom:12}} value={nomeCliente} onChange={e=>setNomeCliente(e.target.value)} placeholder="Nome legível do cliente"/>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
              {!autoConfirmar&&<button style={{...btnG,opacity:temTraco?1:0.45,cursor:temTraco?"pointer":"not-allowed"}} onClick={()=>confirmar(canvasRef)}>✓ Confirmar assinatura</button>}
              {autoConfirmar&&<div style={{fontSize:12,color:C.steel,flex:1}}>✏ Assine acima — confirmado ao clicar em "Saí do local"</div>}
              <button style={btnS} onClick={limpar}>🗑 Limpar</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ── COMPONENTE: FEEDBACK WHATSAPP ────────────────────────────────────────
function PainelFeedbackWhatsApp({ os, cfg }) {
  const [agora, setAgora] = useState(Date.now());
  const [enviado, setEnviado] = useState(!!os.feedbackEnviadoEm);

  // último retorno registrado nos deslocamentos
  const retornos = (os.deslocamentos||[]).filter(d=>d.retorno).map(d=>new Date(d.retorno).getTime());
  const ultimoRetorno = retornos.length > 0 ? Math.max(...retornos) : null;

  const tempoMin = (cfg&&cfg.tempoFeedbackMin) || 60;
  const msgTemplate = (cfg&&cfg.msgFeedback) || "Olá {nome}! Como foi o serviço?";

  useEffect(()=>{
    if(!ultimoRetorno || enviado) return;
    const iv = setInterval(()=>setAgora(Date.now()), 10000); // atualiza a cada 10s
    return ()=>clearInterval(iv);
  },[ultimoRetorno, enviado]);

  if(!ultimoRetorno) return null;

  const msDecorrido = agora - ultimoRetorno;
  const msNecessario = tempoMin * 60 * 1000;
  const msFaltando = msNecessario - msDecorrido;
  const pronto = msFaltando <= 0;

  // Auto-abre WhatsApp quando chega no tempo (só uma vez)
  useEffect(()=>{
    if(pronto && !enviado && ultimoRetorno) {
      const tel = (os.tel||"").replace(/\D/g,"");
      if(tel.length >= 10) {
        const msg = msgTemplate.replace("{nome}", os.nome||"cliente").replace("{servico}", os.tipo||"serviço");
        const url = `https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`;
        window.open(url,"_blank");
        setEnviado(true);
      }
    }
  },[pronto]);

  function enviarAgora(){
    const tel = (os.tel||"").replace(/\D/g,"");
    const num = tel.length===11?`55${tel}`:tel.length===10?`55${tel}`:tel;
    const msg = msgTemplate.replace("{nome}", os.nome||"cliente").replace("{servico}", os.tipo||"serviço");
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank");
    setEnviado(true);
  }

  function minFmt(ms){
    const m = Math.ceil(ms/60000);
    if(m>=60){const h=Math.floor(m/60);const r=m%60;return r>0?`${h}h ${r}min`:`${h}h`;}
    return `${m} min`;
  }

  const msgPreview = msgTemplate.replace("{nome}", os.nome||"cliente").replace("{servico}", os.tipo||"serviço");
  const tel = (os.tel||"").replace(/\D/g,"");
  const semTel = tel.length < 10;

  return(
    <div style={{...card, borderColor: enviado ? C.green+"66" : pronto ? C.green+"aa" : C.steel+"44",
      background: pronto && !enviado ? C.green+"0a" : undefined}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:8}}>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:enviado?C.green:pronto?C.green:C.steel,textTransform:"uppercase"}}>
            💬 Feedback via WhatsApp
          </div>
          {enviado
            ? <div style={{fontSize:12,color:C.green,marginTop:4}}>✓ Mensagem enviada para {os.nome||"cliente"}</div>
            : pronto
              ? <div style={{fontSize:12,color:C.green,marginTop:4,fontWeight:600}}>✅ Hora de enviar o feedback!</div>
              : <div style={{fontSize:12,color:C.gray,marginTop:4}}>Envio automático em <strong style={{color:C.white}}>{minFmt(msFaltando)}</strong></div>
          }
        </div>
        {/* contador ou status */}
        {!enviado && !pronto && (
          <div style={{textAlign:"center",background:C.surface,borderRadius:10,padding:"8px 16px",minWidth:80}}>
            <div style={{fontFamily:"monospace",fontSize:20,fontWeight:700,color:C.amber}}>{minFmt(msFaltando)}</div>
            <div style={{fontSize:9,color:C.gray,textTransform:"uppercase",letterSpacing:1}}>restantes</div>
          </div>
        )}
        {!enviado && pronto && (
          <div style={{textAlign:"center",background:C.green+"22",borderRadius:10,padding:"8px 16px",minWidth:80,border:`1px solid ${C.green}44`}}>
            <div style={{fontSize:22}}>🟢</div>
            <div style={{fontSize:9,color:C.green,textTransform:"uppercase",letterSpacing:1,fontWeight:700}}>Pronto</div>
          </div>
        )}
      </div>

      {/* preview da mensagem */}
      <div style={{background:C.surface,borderRadius:10,padding:"10px 14px",fontSize:13,color:C.white,marginBottom:12,borderLeft:`3px solid ${C.steel}`,lineHeight:1.6}}>
        <div style={{fontSize:10,color:C.gray,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>Preview da mensagem</div>
        {msgPreview}
      </div>

      {semTel && <div style={{fontSize:12,color:C.red,marginBottom:10}}>⚠ Telefone do cliente não cadastrado — edite a OS para adicionar.</div>}

      {!enviado && (
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <button style={{...btnG,opacity:semTel?0.4:1,cursor:semTel?"not-allowed":"pointer"}}
            onClick={semTel?undefined:enviarAgora}>
            📲 Enviar agora
          </button>
          <button style={btnS} onClick={()=>setEnviado(true)}>Marcar como enviado</button>
        </div>
      )}
    </div>
  );
}

function PainelTrechos({titulo,cor,trechos,emAndamento,onSaida,onRetorno,onEncerrar,
  execucaoInline,os,onUpdateOS,onChegadaLocal,onSaidaLocal,onChegadaLoja,isGer,onEditarTrecho}){

  const trechoAberto  = trechos.find(d=>(d.saidaLoja||d.saida)&&!d.retorno);
  const ultimoTrecho  = trechos.length>0?trechos[trechos.length-1]:null;
  const totalH        = parseFloat(somaHoras(trechos).toFixed(2));
  const [etapa,setEtapa]       = useState(0);
  const [errCampo,setErrCampo] = useState("");

  function upOS(k,v){if(onUpdateOS)onUpdateOS({...os,[k]:v,savedAt:new Date().toISOString()});}

  function ferrOk(){
    const pend=(os.ferramentasOS||[]).filter(f=>!f.devolvido);
    if(pend.length>0){setErrCampo("Recolha "+pend.length+" ferramenta(s) antes de continuar.");return false;}
    return true;
  }

  // "Saí do local" — valida ferramentas ANTES de liberar
  function handleSaidaLocal(){
    if(!ferrOk())return;
    setErrCampo("");
    onSaidaLocal();
  }

  // Pendente — valida ferramentas
  function handleRetorno(){
    if(!ferrOk())return;
    setErrCampo("");
    onRetorno();
  }

  // Concluído — valida ferramentas + obrigatórios + abre tela gerente
  function handleConcluir(){
    if(!ferrOk())return;
    if(!(os.fotosAntes&&os.fotosAntes.length)){setErrCampo("Adicione pelo menos 1 foto ANTES do serviço.");return;}
    if(!(os.fotosDepois&&os.fotosDepois.length)){setErrCampo("Adicione pelo menos 1 foto DEPOIS do serviço.");return;}
    if(!(os.assinatura&&os.assinatura.img)){setErrCampo("Colha a assinatura do cliente antes de concluir.");return;}
    setErrCampo("");
    onEncerrar();
  }

  function handleSaida(){setEtapa(os.assinatura&&os.assinatura.img?5:0);setErrCampo("");onSaida();}

  const temFerramentas = (os.ferramentasOS||[]).length>0;
  const chegouNaLoja   = ultimoTrecho&&ultimoTrecho.chegadaLoja&&!trechoAberto;

  return(
    <div style={{...card,borderColor:cor+"44"}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:cor,textTransform:"uppercase",marginBottom:14}}>{titulo}</div>

      {/* Histórico de trechos */}
      {trechos.length>0&&(
        <div style={{marginBottom:14}}>
          {trechos.map((d,i)=>{
            const dur=diffHoras(d.saidaLoja||d.saida,d.chegadaLoja||d.retorno);
            const ab=(d.saidaLoja||d.saida)&&!d.retorno;
            return(
              <div key={d.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:ab?cor+"11":"#F7F6F4",border:"1px solid "+(ab?cor:"#E0DEDB"),borderRadius:8,marginBottom:6,flexWrap:"wrap"}}>
                <div style={{fontSize:11,color:C.gray,fontWeight:700,minWidth:22}}>#{i+1}</div>
                <div style={{flex:1}}><span style={{fontSize:11,color:C.gray}}>Saída </span><span style={{fontFamily:"monospace",fontWeight:700,fontSize:13}}>{fmtH(d.saidaLoja||d.saida)}</span></div>
                {d.retorno?<div style={{flex:1}}><span style={{fontSize:11,color:C.gray}}>Retorno </span><span style={{fontFamily:"monospace",fontWeight:700,fontSize:13}}>{fmtH(d.chegadaLoja||d.retorno)}</span></div>:<div style={{flex:1,fontSize:12,color:cor,fontWeight:600}}>Em campo...</div>}
                {dur!=null&&<div style={{fontFamily:"monospace",fontSize:13,color:cor,fontWeight:700}}>{dur}h</div>}
                {isGer&&onEditarTrecho&&(
                  <button style={{background:"#1565C0",border:"none",color:"#FFFFFF",borderRadius:6,padding:"5px 10px",fontSize:11,fontWeight:700,cursor:"pointer",flexShrink:0}} onClick={()=>onEditarTrecho(d)}>
                    ✏ Editar
                  </button>
                )}
              </div>
            );
          })}
          {trechos.filter(d=>d.retorno).length>0&&(
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:8,paddingTop:8,borderTop:"1px solid #ECEAE7"}}>
              <span style={{fontSize:11,color:C.gray,fontWeight:700,textTransform:"uppercase"}}>Total em campo</span>
              <span style={{fontFamily:"monospace",fontSize:20,fontWeight:700,color:cor}}>{totalH}h</span>
            </div>
          )}
        </div>
      )}

      {/* Gerência: adicionar registro manual de horário esquecido */}
      {isGer&&onEditarTrecho&&(
        <button style={{...btnS,width:"100%",padding:"10px",fontSize:12,marginBottom:trechos.length>0?8:0}} onClick={()=>onEditarTrecho({id:Date.now(),saida:null,retorno:null})}>
          ➕ Adicionar registro manual de horário
        </button>
      )}

      {/* ── A: Saí da loja ── */}
      {emAndamento&&!trechoAberto&&!chegouNaLoja&&(
        <button style={{...btnP,width:"100%",padding:"15px",fontSize:16,fontWeight:700}} onClick={handleSaida}>
          🛒 Saí da loja
        </button>
      )}

      {/* ── B: Cheguei no local ── */}
      {execucaoInline&&trechoAberto&&!trechoAberto.chegadaLocal&&(
        <div style={{background:"#FFF8E1",borderRadius:10,padding:16,border:"1px solid #FFE082",marginTop:8}}>
          <div style={{fontSize:13,color:"#E65100",fontWeight:600,marginBottom:10}}>🚗 A caminho do cliente...</div>
          <button style={{...btnP,width:"100%",padding:"14px",fontSize:15,fontWeight:700,background:"#E65100"}} onClick={onChegadaLocal}>
            🔧 Cheguei no local do serviço
          </button>
        </div>
      )}

      {/* ── C-G: Execução ── */}
      {execucaoInline&&trechoAberto&&trechoAberto.chegadaLocal&&(
        <div style={{borderTop:"2px dashed "+cor+"55",paddingTop:16,marginTop:8}}>
          {/* Barra progresso */}
          <div style={{display:"flex",gap:3,marginBottom:16}}>
            {["Antes","Durante","Diagnóstico","Depois","Ferramentas","Assinatura"].map((lb,i)=>(
              <div key={i} title={lb} style={{flex:1,height:5,borderRadius:3,background:i<etapa?C.green:i===etapa?cor:"#E0DEDB",transition:"background 0.3s"}}/>
            ))}
          </div>

          {/* C — Fotos ANTES */}
          {etapa===0&&(
            <div>
              <PainelMidia titulo="Fotos — ANTES do serviço" cor={C.steel} obrigatorio={true} itens={os.fotosAntes||[]} onChange={v=>upOS("fotosAntes",v)} somenteLeitura={false}/>
              <button style={{...btnP,width:"100%",padding:"14px",fontWeight:700}} onClick={()=>setEtapa(1)}>Avançar →</button>
            </div>
          )}

          {/* D — Fotos DURANTE */}
          {etapa===1&&(
            <div>
              <PainelMidia titulo="Fotos — DURANTE o serviço" cor={C.green} obrigatorio={false} itens={os.fotosDurante||[]} onChange={v=>upOS("fotosDurante",v)} somenteLeitura={false}/>
              <div style={{display:"flex",gap:10}}>
                <button style={{...btnS,flex:1,padding:"13px"}} onClick={()=>setEtapa(0)}>← Voltar</button>
                <button style={{...btnP,flex:2,padding:"13px",fontWeight:700}} onClick={()=>setEtapa(2)}>Avançar →</button>
              </div>
            </div>
          )}

          {/* E — Diagnóstico */}
          {etapa===2&&(
            <div>
              <div style={{background:"#F7F6F4",borderRadius:10,padding:16,marginBottom:12,border:"1px solid #E8E6E3"}}>
                <div style={{fontSize:11,fontWeight:700,color:"#555",textTransform:"uppercase",marginBottom:8}}>📋 Diagnóstico / Serviço executado / Observações</div>
                <textarea style={{...inp,minHeight:120,resize:"vertical"}} value={os.relatorio||os.diag||""} onChange={e=>upOS("relatorio",e.target.value)} placeholder="O que encontrou, o que foi feito, observações..."/>
              </div>
              <div style={{display:"flex",gap:10}}>
                <button style={{...btnS,flex:1,padding:"13px"}} onClick={()=>setEtapa(1)}>← Voltar</button>
                <button style={{...btnP,flex:2,padding:"13px",fontWeight:700}} onClick={()=>setEtapa(3)}>Avançar →</button>
              </div>
            </div>
          )}

          {/* F — Fotos DEPOIS */}
          {etapa===3&&(
            <div>
              <PainelMidia titulo="Fotos — DEPOIS do serviço" cor={C.green} obrigatorio={true} itens={os.fotosDepois||[]} onChange={v=>upOS("fotosDepois",v)} somenteLeitura={false}/>
              <div style={{display:"flex",gap:10}}>
                <button style={{...btnS,flex:1,padding:"13px"}} onClick={()=>setEtapa(2)}>← Voltar</button>
                <button style={{...btnP,flex:2,padding:"13px",fontWeight:700}} onClick={()=>setEtapa(4)}>Avançar →</button>
              </div>
            </div>
          )}

          {/* G — Recolher ferramentas */}
          {etapa===4&&(
            <div>
              {temFerramentas?(
                <ChecklistFerramentas ferramentasOS={os.ferramentasOS||[]} onChange={v=>upOS("ferramentasOS",v)} somenteLeitura={false} labelTitulo="🔧 Recolher ferramentas"/>
              ):(
                <div style={{...card,background:"#F1F8E9",borderColor:C.green+"44"}}>
                  <div style={{fontSize:13,color:C.green}}>✓ Nenhuma ferramenta levada para este serviço.</div>
                </div>
              )}
              <div style={{display:"flex",gap:10,marginTop:8}}>
                <button style={{...btnS,flex:1,padding:"13px"}} onClick={()=>setEtapa(3)}>← Voltar</button>
                <button style={{...btnP,flex:2,padding:"13px",fontWeight:700}} onClick={()=>setEtapa(5)}>Avançar →</button>
              </div>
            </div>
          )}

          {/* H — Assinatura */}
          {etapa===5&&(
            <div>
              <PainelAssinatura assinatura={os.assinatura||null} onChange={v=>upOS("assinatura",v)} somenteLeitura={false} autoConfirmar={true}/>
              {errCampo&&<div style={{padding:"10px 14px",background:"#FFEBEE",borderRadius:8,color:"#B71C1C",fontSize:13,fontWeight:600,marginBottom:12,border:"1px solid #FFCDD2"}}>⚠ {errCampo}</div>}
              <div style={{display:"flex",gap:10,marginTop:4}}>
                <button style={{...btnS,flex:1,padding:"13px"}} onClick={()=>setEtapa(4)}>← Voltar</button>
                {/* Saí do local — valida ferramentas */}
                {!trechoAberto.saidaLocal&&(
                  <button style={{...btnP,flex:2,padding:"13px",fontWeight:700,background:"#E65100"}} onClick={handleSaidaLocal}>
                    🚗 Saí do local
                  </button>
                )}
              </div>
              {/* A caminho da loja */}
              {trechoAberto.saidaLocal&&!trechoAberto.chegadaLoja&&(
                <div style={{marginTop:12,background:"#FFF8E1",borderRadius:10,padding:14,border:"1px solid #FFE082"}}>
                  <div style={{fontSize:13,color:"#E65100",fontWeight:600,marginBottom:10}}>🚗 A caminho da loja...</div>
                  <button style={{...btnP,width:"100%",padding:"14px",fontWeight:700}} onClick={onChegadaLoja}>
                    🏠 Cheguei na loja
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── J: Chegou na loja — 3 opções ── */}
      {chegouNaLoja&&(
        <div style={{borderTop:"2px dashed "+C.green+"55",paddingTop:16,marginTop:8}}>
          <div style={{fontSize:14,color:C.green,fontWeight:700,textAlign:"center",marginBottom:16}}>🏠 Chegou na loja!</div>
          {errCampo&&<div style={{padding:"10px 14px",background:"#FFEBEE",borderRadius:8,color:"#B71C1C",fontSize:13,fontWeight:600,marginBottom:12,border:"1px solid #FFCDD2"}}>⚠ {errCampo}</div>}
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <button style={{...btnP,padding:"16px",fontSize:15,fontWeight:700}} onClick={handleSaida}>
              🛒 Saí da loja novamente
            </button>
            <button style={{...btnP,padding:"16px",fontSize:15,fontWeight:700,background:"#F9A825",color:"#1A1A1A"}} onClick={handleRetorno}>
              ⏸ Serviço pendente — retornei à loja
            </button>
            <button style={{...btnP,padding:"16px",fontSize:15,fontWeight:700,background:C.green}} onClick={handleConcluir}>
              🏁 Serviço concluído — retornei à loja
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


function gerarPDF(os){
  const totMat=(os.mats||[]).reduce((a,m)=>a+(parseFloat(m.q)||0)*(parseFloat(m.v)||0),0)||0;
  const total=parseFloat(os.valorTotal)||0;
  const Q=String.fromCharCode(34);
  const matLinhas=(os.mats&&os.mats.length>0)
    ?os.mats.map(m=>"<tr><td>"+m.d+"</td><td style="+Q+"text-align:center"+Q+">"+m.q+"</td><td style="+Q+"text-align:right"+Q+">"+fmtR((parseFloat(m.q)||0)*(parseFloat(m.v)||0))+"</td></tr>").join("")
    :"<tr><td colspan="+Q+"3"+Q+" style="+Q+"color:#888;text-align:center"+Q+">Nenhum produto</td></tr>";
  const css="*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;color:#1a1a1a;background:#fff;padding:40px}h2{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#CC1F1F;margin-bottom:12px;margin-top:24px}.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#f8f8f8;padding:16px;border-radius:8px}.info-item label{font-size:10px;color:#888;font-weight:700;text-transform:uppercase;display:block;margin-bottom:4px}.info-item span{font-size:14px;font-weight:600}table{width:100%;border-collapse:collapse;margin-top:8px}th{background:#1A1A1A;color:#CC1F1F;padding:10px 12px;text-align:left;font-size:11px;text-transform:uppercase}td{padding:10px 12px;border-bottom:1px solid #eee;font-size:13px}.total-row{background:#1A1A1A;color:#fff}.total-row td{font-weight:700;font-size:15px;border:none}.footer{margin-top:40px;padding-top:16px;border-top:1px solid #eee;font-size:11px;color:#aaa;text-align:center}";
  const html="<!DOCTYPE html><html><head><meta charset="+Q+"UTF-8"+Q+"><style>"+css+"</style></head><body>"
    +"<h1 style="+Q+"font-size:22px;font-weight:900;color:#CC1F1F;margin-bottom:4px"+Q+">"+os.numero+"</h1>"
    +"<p style="+Q+"color:#888;margin-bottom:24px"+Q+">"+fmtD(os.data)+"</p>"
    +"<h2>Cliente</h2>"
    +"<div class="+Q+"info-grid"+Q+"><div class="+Q+"info-item"+Q+"><label>Nome</label><span>"+(os.nome||"—")+"</span></div>"
    +"<div class="+Q+"info-item"+Q+"><label>Telefone</label><span>"+(os.tel||"—")+"</span></div>"
    +"<div class="+Q+"info-item"+Q+" style="+Q+"grid-column:1/-1"+Q+"><label>Endereço</label><span>"+(os.end||"—")+"</span></div></div>"
    +"<h2>Serviço</h2>"
    +"<div class="+Q+"info-grid"+Q+"><div class="+Q+"info-item"+Q+"><label>Tipo</label><span>"+(os.tipo||"—")+"</span></div>"
    +"<div class="+Q+"info-item"+Q+"><label>Minutos estimados</label><span>"+(os.hEst||"—")+"min</span></div></div>"
    +(os.solicit?"<p style="+Q+"margin-top:12px;padding:14px;background:#f8f8f8;border-radius:8px"+Q+"><strong>Descrição:</strong> "+os.solicit+"</p>":"")
    +"<h2>Materiais e valores</h2>"
    +"<table><tr><th>Material</th><th style="+Q+"text-align:center"+Q+">Qtd</th><th style="+Q+"text-align:right"+Q+">Valor</th></tr>"
    +matLinhas
    +"<tr class="+Q+"total-row"+Q+"><td colspan="+Q+"2"+Q+">TOTAL DO ORÇAMENTO</td><td style="+Q+"text-align:right"+Q+">"+fmtR(total)+"</td></tr></table>"
    +"<p style="+Q+"margin-top:16px;padding:12px 16px;background:#E8F5E9;border-radius:8px;font-size:13px;color:#2E7D32"+Q+">Garantia: "+(os.garantia||"90 dias")+"</p>"
    +"<div class="+Q+"footer"+Q+">Orçamento gerado em "+new Date().toLocaleString("pt-BR")+" - Polar Servicos</div>"
    +"</body></html>";
  const blob=new Blob([html],{type:"text/html"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download=os.numero+"-orcamento.html";a.click();
  URL.revokeObjectURL(url);
}

// ════════════════════════════════════════════════════════════════════════
// GESTÃO DE FERRAMENTAS (gerência/admin)
// ════════════════════════════════════════════════════════════════════════
function GestaoFerramentas({onBack}){
  const[ferramentas,setFerramentas]=useState([]);
  const[form,setForm]=useState({nome:"",descricao:""});
  const[editId,setEditId]=useState(null);
  const[err,setErr]=useState("");
  useEffect(()=>{storageGet("polar_ferramentas").then(d=>{if(d)setFerramentas(d);});},[]);
  async function save(n){setFerramentas(n);await storageSet("polar_ferramentas",n);}
  function proxId(lista){
    if(lista.length===0)return 1;
    return Math.max(...lista.map(f=>f.fid))+1;
  }
  function handleAdd(){
    if(!form.nome.trim()){setErr("Nome da ferramenta obrigatório.");return;}
    let n;
    if(editId){
      n=ferramentas.map(f=>f.id===editId?{...f,...form}:f);
    }else{
      const fid=proxId(ferramentas);
      n=[...ferramentas,{id:"f"+Date.now(),fid,nome:form.nome.trim(),descricao:form.descricao.trim(),ativo:true,criadoEm:new Date().toISOString()}];
    }
    save(n);setForm({nome:"",descricao:""});setEditId(null);setErr("");
  }
  function toggleAtivo(id){save(ferramentas.map(f=>f.id===id?{...f,ativo:!f.ativo}:f));}
  function remover(id){if(window.confirm("Remover ferramenta? Ela será desvinculada de novas OS."))save(ferramentas.filter(f=>f.id!==id));}
  return(
    <div>
      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>{editId?"Editar ferramenta":"Nova ferramenta"}</div>
        <div style={row}>
          <div style={{flex:2,minWidth:160}}><label style={lbl}>Nome da ferramenta</label><input style={inp} value={form.nome} onChange={e=>setForm(p=>({...p,nome:e.target.value}))} placeholder="Ex: Chave Ajustável"/></div>
          <div style={{flex:2,minWidth:160}}><label style={lbl}>Descrição (opcional)</label><input style={inp} value={form.descricao} onChange={e=>setForm(p=>({...p,descricao:e.target.value}))} placeholder="Marca, tamanho, cor..."/></div>
        </div>
        {err&&<div style={{color:C.red,fontSize:13,marginBottom:10}}>{err}</div>}
        <div style={{display:"flex",gap:10}}>
          {editId&&<button style={btnS} onClick={()=>{setEditId(null);setForm({nome:"",descricao:""});}}>Cancelar</button>}
          <button style={btnP} onClick={handleAdd}>{editId?"Salvar":"Adicionar ferramenta"}</button>
        </div>
      </div>
      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Ferramentas cadastradas ({ferramentas.length})</div>
        {ferramentas.length===0&&<div style={{color:C.gray,fontSize:13,textAlign:"center",padding:"20px 0"}}>Nenhuma ferramenta cadastrada ainda.</div>}
        {[...ferramentas].sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR",{sensitivity:"base"})).map(f=>(
          <div key={f.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:`1px solid ${C.navyLight}`,opacity:f.ativo?1:0.5}}>
            <div style={{width:40,height:40,borderRadius:8,background:C.amber+"22",border:"1px solid "+C.amber+"44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontWeight:700,color:C.amber,fontSize:13,flexShrink:0}}>#{String(f.fid).padStart(2,"0")}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:600,fontSize:14}}>{f.nome}</div>
              {f.descricao&&<div style={{fontSize:12,color:C.gray,marginTop:2}}>{f.descricao}</div>}
            </div>
            <div style={{display:"flex",gap:8,flexShrink:0}}>
              <button style={{...btnS,padding:"6px 10px",fontSize:12}} onClick={()=>{setForm({nome:f.nome,descricao:f.descricao||""});setEditId(f.id);}}>✏</button>
              <button style={{...(f.ativo?btnR:btnG),padding:"6px 10px",fontSize:12}} onClick={()=>toggleAtivo(f.id)}>{f.ativo?"Desativar":"Ativar"}</button>
              <button style={{...btnR,padding:"6px 10px",fontSize:12}} onClick={()=>remover(f.id)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
      <button style={btnS} onClick={onBack}>← Voltar</button>
    </div>
  );
}

// ── SELETOR DE FERRAMENTAS (técnico escolhe ao iniciar) ──────────────────
function SeletorFerramentas({selecionadas,onChange}){
  const[ferramentas,setFerramentas]=useState([]);
  useEffect(()=>{storageGet("polar_ferramentas").then(d=>{if(d)setFerramentas(d.filter(f=>f.ativo));});},[]);
  if(ferramentas.length===0)return(
    <div style={{...card,borderColor:C.navyLight}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:8}}>🔧 Ferramentas</div>
      <div style={{fontSize:13,color:C.gray}}>Nenhuma ferramenta cadastrada. Peça ao gerente para cadastrar no menu Ferramentas.</div>
    </div>
  );
  function toggle(fid){
    const ja=selecionadas.find(s=>s.fid===fid);
    if(ja)onChange(selecionadas.filter(s=>s.fid!==fid));
    else{const f=ferramentas.find(x=>x.fid===fid);onChange([...selecionadas,{fid:f.fid,nome:f.nome,levadoEm:new Date().toISOString(),devolvido:false}]);}
  }
  return(
    <div style={{...card,borderColor:C.orange+"44"}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.orange,textTransform:"uppercase",marginBottom:4}}>🔧 Ferramentas que está levando</div>
      <div style={{fontSize:12,color:C.gray,marginBottom:14}}>Selecione todas as ferramentas que vai levar para o serviço.</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {[...ferramentas].sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR",{sensitivity:"base"})).map(f=>{
          const sel=selecionadas.find(s=>s.fid===f.fid);
          return(
            <label key={f.fid} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:8,border:`1px solid ${sel?C.orange:C.navyLight}`,background:sel?C.orange+"11":C.surface,cursor:"pointer",userSelect:"none"}}>
              <input type="checkbox" checked={!!sel} onChange={()=>toggle(f.fid)} style={{width:16,height:16,accentColor:C.orange}}/>
              <div style={{width:32,height:32,borderRadius:6,background:C.amber+"22",border:"1px solid "+C.amber+"44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontWeight:700,color:C.amber,fontSize:12,flexShrink:0}}>#{String(f.fid).padStart(2,"0")}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:14}}>{f.nome}</div>
                {f.descricao&&<div style={{fontSize:11,color:C.gray}}>{f.descricao}</div>}
              </div>
              {sel&&<span style={{color:C.orange,fontSize:18}}>✓</span>}
            </label>
          );
        })}
      </div>
    </div>
  );
}

// ── CHECKLIST DE RETORNO DE FERRAMENTAS ──────────────────────────────────
function ChecklistFerramentas({ferramentasOS,onChange,somenteLeitura,labelTitulo}){
  if(!ferramentasOS||ferramentasOS.length===0)return null;
  const pendentes=ferramentasOS.filter(f=>!f.devolvido).length;
  const todas=ferramentasOS.length;
  const pct=todas>0?Math.round(((todas-pendentes)/todas)*100):100;
  const titulo=labelTitulo||"🔧 Checklist de ferramentas";
  function toggleDev(fid){
    if(somenteLeitura)return;
    onChange(ferramentasOS.map(f=>f.fid===fid?{...f,devolvido:!f.devolvido,devolvidoEm:f.devolvido?null:new Date().toISOString()}:f));
  }
  return(
    <div style={{...card,borderColor:pendentes>0?C.red+"66":C.green+"66"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:pendentes>0?C.red:C.green,textTransform:"uppercase"}}>
            {titulo} {!somenteLeitura&&pendentes>0&&<span style={{color:C.red}}>*</span>}
          </div>
          {!somenteLeitura&&pendentes>0&&<div style={{fontSize:11,color:C.red,marginTop:4}}>⚠ Confirme a recolhimento de todas as ferramentas para concluir</div>}
          {pendentes===0&&<div style={{fontSize:11,color:C.green,marginTop:4}}>✓ Todas as ferramentas recolhidas</div>}
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:18,fontWeight:700,fontFamily:"monospace",color:pendentes>0?C.red:C.green}}>{todas-pendentes}/{todas}</div>
          <div style={{fontSize:10,color:C.gray}}>recolhidas</div>
        </div>
      </div>
      {/* barra de progresso */}
      <div style={{height:6,borderRadius:3,background:C.navyLight,marginBottom:14,overflow:"hidden"}}>
        <div style={{height:"100%",width:pct+"%",background:pct===100?C.green:C.amber,borderRadius:3,transition:"width 0.3s"}}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {ferramentasOS.map(f=>(
          <div key={f.fid} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:8,border:`1px solid ${f.devolvido?C.green:C.red}44`,background:f.devolvido?C.green+"0d":C.red+"0d"}}>
            <div style={{width:32,height:32,borderRadius:6,background:C.amber+"22",border:"1px solid "+C.amber+"44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontWeight:700,color:C.amber,fontSize:12,flexShrink:0}}>#{String(f.fid).padStart(2,"0")}</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,fontSize:14}}>{f.nome}</div>
              {f.devolvido&&f.devolvidoEm&&<div style={{fontSize:11,color:C.green}}>Confirmado às {new Date(f.devolvidoEm).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</div>}
              {!f.devolvido&&<div style={{fontSize:11,color:C.red}}>Não confirmada</div>}
            </div>
            {!somenteLeitura?(
              <button
                onClick={()=>toggleDev(f.fid)}
                style={{...(f.devolvido?btnR:btnG),padding:"8px 14px",fontSize:13,fontWeight:700,minWidth:110}}>
                {f.devolvido?"↩ Desfazer":"✓ Recolhida"}
              </button>
            ):(
              <span style={{fontSize:20}}>{f.devolvido?"✅":"❌"}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// LOGIN
// ════════════════════════════════════════════════════════════════════════
function Login({onLogin}){
  const[login,setLogin]=useState("");
  const[senha,setSenha]=useState("");
  const[err,setErr]=useState("");
  const[usuarios,setUsuarios]=useState(USUARIOS_PADRAO);
  useEffect(()=>{storageGet("polar_usuarios").then(u=>{if(u)setUsuarios(u);});}, []);
  function handle(){
    const u=usuarios.find(x=>x.login.trim().toLowerCase()===login.trim().toLowerCase()&&x.senha===senha);
    if(!u){setErr("Usuário ou senha incorretos");return;}
    onLogin(u);
  }
  return(
    <div style={{minHeight:"100vh",background:"#EDECEA",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{width:"100%",maxWidth:380}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <img src={LOGO_B64} alt="Logo" style={{width:130,height:130,objectFit:"contain",margin:"0 auto 12px",display:"block"}}/>
          <div style={{fontSize:13,color:C.gray,letterSpacing:3,textTransform:"uppercase",marginTop:4}}>Gestão de Serviços</div>
        </div>
        <div style={card}>
          <label style={lbl}>Usuário</label>
          <input style={{...inp,marginBottom:12}} value={login} onChange={e=>setLogin(e.target.value)} placeholder="seu usuário" autoComplete="off"/>
          <label style={lbl}>Senha</label>
          <input style={{...inp,marginBottom:16}} type="password" value={senha} onChange={e=>setSenha(e.target.value)} placeholder="••••••••" onKeyDown={e=>e.key==="Enter"&&handle()}/>
          {err&&<div style={{color:C.red,fontSize:13,marginBottom:12,textAlign:"center"}}>{err}</div>}
          <button style={{...btnP,width:"100%"}} onClick={handle}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// CONFIGURAÇÕES
// ════════════════════════════════════════════════════════════════════════
function Configuracoes({cfg,onSave}){
  const[form,setForm]=useState({...cfg});
  const[saved,setSaved]=useState(false);
  function s(k,v){setForm(p=>({...p,[k]:v}));}
  function salvar(){onSave(form);setSaved(true);setTimeout(()=>setSaved(false),2000);}
  const preview=calcValorServico(1,form);
  return(
    <div><div style={card}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Parâmetros de precificação</div>
      <div style={row}>
        <div style={{flex:1,minWidth:160}}><label style={lbl}>Preço/hora cobrado (R$)</label><input style={inp} type="number" min={0} value={form.precoHora} onChange={e=>s("precoHora",parseFloat(e.target.value)||0)}/></div>
        <div style={{flex:1,minWidth:160}}><label style={lbl}>Deslocamento fixo (R$)</label><input style={inp} type="number" min={0} value={form.deslocamento} onChange={e=>s("deslocamento",parseFloat(e.target.value)||0)}/></div>
      </div>
      <div style={row}>
        <div style={{flex:1,minWidth:130}}><label style={lbl}>Imprevisto (%)</label><input style={inp} type="number" min={0} max={100} value={form.imprevisto} onChange={e=>s("imprevisto",parseFloat(e.target.value)||0)}/></div>
        <div style={{flex:1,minWidth:130}}><label style={lbl}>Ferramentas (%)</label><input style={inp} type="number" min={0} max={100} value={form.ferramentas} onChange={e=>s("ferramentas",parseFloat(e.target.value)||0)}/></div>
      </div>
      <div style={row}>
        <div style={{flex:1,minWidth:130}}><label style={lbl}>Impostos (%)</label><input style={inp} type="number" min={0} max={100} value={form.impostos} onChange={e=>s("impostos",parseFloat(e.target.value)||0)}/></div>
        <div style={{flex:1,minWidth:130}}><label style={lbl}>Comissão técnico (%)</label><input style={inp} type="number" min={0} max={100} value={form.comissao} onChange={e=>s("comissao",parseFloat(e.target.value)||0)}/></div>
        <div style={{flex:1,minWidth:130}}><label style={lbl}>Custo MO/hora (R$)</label><input style={inp} type="number" min={0} value={form.custoMOHora} onChange={e=>s("custoMOHora",parseFloat(e.target.value)||0)}/></div>
      </div>
      <div style={{background:C.surface,borderRadius:10,padding:16,marginTop:8,borderLeft:`3px solid ${C.amber}`}}>
        <div style={{fontSize:10,color:C.gray,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>Preview — serviço de 1 hora</div>
        <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
          <div><div style={{fontSize:10,color:C.gray}}>MO (1h)</div><div style={{fontFamily:"monospace"}}>{fmtR(form.precoHora)}</div></div>
          <div><div style={{fontSize:10,color:C.gray}}>Variáveis</div><div style={{fontFamily:"monospace"}}>{fmtR(form.precoHora*(form.imprevisto+form.ferramentas)/100)}</div></div>
          <div><div style={{fontSize:10,color:C.gray}}>Deslocamento</div><div style={{fontFamily:"monospace"}}>{fmtR(form.deslocamento)}</div></div>
          <div><div style={{fontSize:10,color:C.gray,fontWeight:700}}>Total ao cliente</div><div style={{fontFamily:"monospace",color:C.amber,fontWeight:700,fontSize:16}}>{fmtR(preview)}</div></div>
        </div>
      </div>
      <div style={{display:"flex",gap:12,marginTop:20,alignItems:"center"}}>
        <button style={btnP} onClick={salvar}>Salvar configurações</button>
        {saved&&<span style={{color:C.green,fontSize:13,fontWeight:600}}>✓ Salvo!</span>}
      </div>
    </div>
    <div style={card}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.green,textTransform:"uppercase",marginBottom:16}}>💬 Feedback via WhatsApp</div>
      <div style={row}>
        <div style={{flex:1,minWidth:160}}>
          <label style={lbl}>Enviar feedback após (minutos)</label>
          <input style={inp} type="number" min={5} max={1440} value={form.tempoFeedbackMin||60}
            onChange={e=>s("tempoFeedbackMin",parseInt(e.target.value)||60)}/>
          <div style={{fontSize:11,color:C.gray,marginTop:4}}>Ex: 60 = 1 hora após o retorno do técnico</div>
        </div>
      </div>
      <label style={lbl}>Mensagem padrão</label>
      <textarea style={{...inp,minHeight:100,resize:"vertical",marginBottom:6}}
        value={form.msgFeedback||""}
        onChange={e=>s("msgFeedback",e.target.value)}
        placeholder="Use {nome} para o nome do cliente e {servico} para o tipo de serviço"/>
      <div style={{fontSize:11,color:C.gray}}>Variáveis disponíveis: <code style={{color:C.amber}}>{"{nome}"}</code> · <code style={{color:C.amber}}>{"{servico}"}</code></div>
      <div style={{display:"flex",gap:12,marginTop:16,alignItems:"center"}}>
        <button style={btnP} onClick={salvar}>Salvar configurações</button>
        {saved&&<span style={{color:C.green,fontSize:13,fontWeight:600}}>✓ Salvo!</span>}
      </div>
    </div></div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// GESTÃO USUÁRIOS
// ════════════════════════════════════════════════════════════════════════
function GestaoUsuarios({onBack}){
  const[usuarios,setUsuarios]=useState(USUARIOS_PADRAO);
  const[form,setForm]=useState({nome:"",login:"",senha:"",role:"tecnico"});
  const[editId,setEditId]=useState(null);
  const[err,setErr]=useState("");
  useEffect(()=>{storageGet("polar_usuarios").then(u=>{if(u)setUsuarios(u);});}, []);
  async function save(n){setUsuarios(n);await storageSet("polar_usuarios",n);}
  function handleAdd(){
    if(!form.nome||!form.login||!form.senha){setErr("Preencha todos os campos");return;}
    if(usuarios.find(u=>u.login.trim().toLowerCase()===form.login.trim().toLowerCase()&&u.id!==editId)){setErr("Login já existe");return;}
    const n=editId?usuarios.map(u=>u.id===editId?{...u,...form}:u):[...usuarios,{...form,id:"u"+Date.now()}];
    save(n);setForm({nome:"",login:"",senha:"",role:"tecnico"});setEditId(null);setErr("");
  }
  const roleLabel={admin:"Admin",gerencia:"Gerência",tecnico:"Técnico"};
  const roleColor={admin:C.orange,gerencia:C.amber,tecnico:C.steel};
  return(
    <div>
      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>{editId?"Editar usuário":"Novo usuário"}</div>
        <div style={row}>
          <div style={{flex:1,minWidth:120}}><label style={lbl}>Nome</label><input style={inp} value={form.nome} onChange={e=>setForm(p=>({...p,nome:e.target.value}))} placeholder="Nome"/></div>
          <div style={{flex:1,minWidth:120}}><label style={lbl}>Login</label><input style={inp} value={form.login} onChange={e=>setForm(p=>({...p,login:e.target.value}))} placeholder="login"/></div>
        </div>
        <div style={row}>
          <div style={{flex:1,minWidth:120}}><label style={lbl}>Senha</label><input style={inp} value={form.senha} onChange={e=>setForm(p=>({...p,senha:e.target.value}))} placeholder="senha"/></div>
          <div style={{flex:1,minWidth:120}}><label style={lbl}>Nível</label>
            <select style={inp} value={form.role} onChange={e=>setForm(p=>({...p,role:e.target.value}))}>
              <option value="tecnico">Técnico</option><option value="gerencia">Gerência</option><option value="admin">Admin</option>
            </select>
          </div>
        </div>
        {err&&<div style={{color:C.red,fontSize:13,marginBottom:10}}>{err}</div>}
        <div style={{display:"flex",gap:10}}>
          {editId&&<button style={btnS} onClick={()=>{setEditId(null);setForm({nome:"",login:"",senha:"",role:"tecnico"});}}>Cancelar</button>}
          <button style={btnP} onClick={handleAdd}>{editId?"Salvar":"Adicionar"}</button>
        </div>
      </div>
      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Usuários</div>
        {usuarios.map(u=>(
          <div key={u.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:`1px solid ${C.navyLight}`}}>
            <div>
              <div style={{fontWeight:600}}>{u.nome}</div>
              <div style={{fontSize:12,color:C.gray}}>@{u.login} · <span style={{color:roleColor[u.role]||C.gray}}>{roleLabel[u.role]||u.role}</span></div>
            </div>
            <div style={{display:"flex",gap:8}}>
              <button style={btnS} onClick={()=>{setForm({nome:u.nome,login:u.login,senha:u.senha,role:u.role});setEditId(u.id);}}>Editar</button>
              <button style={btnR} onClick={()=>save(usuarios.filter(x=>x.id!==u.id))}>Remover</button>
            </div>
          </div>
        ))}
      </div>
      <button style={btnS} onClick={onBack}>← Voltar</button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// FORM OS
// ════════════════════════════════════════════════════════════════════════
function Form({init,usuario,cfg,onSave,onCancel,usuarios}){
  const isGer=usuario.role==="gerencia"||usuario.role==="admin";
  const isAdmin=usuario.role==="admin";
  const jaAprovado=init&&!["orcamento","devolvida"].includes(init.status);
  const emExecucao=(init&&init.status)==="em_andamento";
  const podeEditar=isGer||isHoje((init&&init.criadoEm))||!init;

  const[os,setOs]=useState(()=>{
    if(init)return{...init};
    const base={
      numero:"gerando...",data:hoje(),status:"orcamento",
      nome:"",tel:"",end:"",tipo:SERVICOS[0].n,hEst:SERVICOS[0].h,
      solicit:"",obsOrcamento:"",garantia:"90 dias (mão de obra)",
      valorTotal:0,valorTotalEditado:false,
      mats:[],criadoPor:usuario.id,criadoEm:new Date().toISOString(),tecnicosAdicionais:[],
      diag:"",exec:"",obsExec:"",hReal:"",
      iniciadoEm:null,concluidoEm:null,
      deslocamentos:[],
      garantias:[],emGarantia:false,
      fotosAntes:[],fotosDurante:[],fotosDepois:[],
      assinatura:null,
      ferramentasOS:[],
    };
    base.valorTotal=calcValorServico(base.hEst,cfg,base.mats);
    return base;
  });

  function s(k,v){setOs(p=>({...p,[k]:v}));}
  useEffect(()=>{
    if(!os.valorTotalEditado&&!jaAprovado){
      setOs(p=>({...p,valorTotal:calcValorServico(p.hEst,cfg,p.mats)}));
    }
  },[os.hEst,os.mats,os.valorTotalEditado]);

  const totMat=os.mats.reduce((a,m)=>a+(parseFloat(m.v)||0),0);
  const hDesl=somaHoras(os.deslocamentos||[]);
  const hGar=somaHoras(os.garantias||[]);
  const hR=hDesl>0?hDesl:(os.iniciadoEm&&os.concluidoEm?diffHoras(os.iniciadoEm,os.concluidoEm)||1:(parseFloat(os.hEst)||60)/60);
  const mc=calcMargem(parseFloat(os.valorTotal)||0,hR,cfg,hGar);
  const mColor=mc.pct>30?C.green:mc.pct>15?C.amber:C.red;

  function addMat(){s("mats",[...os.mats,{id:Date.now(),d:"",notinha:"",v:""}]);}
  function upMat(id,k,v){s("mats",os.mats.map(m=>m.id===id?{...m,[k]:v}:m));}
  function rmMat(id){s("mats",os.mats.filter(m=>m.id!==id));}
  const [errFoto, setErrFoto] = useState("");
  async function salvar(sf){
    let numeroFinal=os.numero;
    if(numeroFinal==="gerando..."){numeroFinal=await genNum();}
    onSave({...os,numero:numeroFinal,totMat,margem:mc.m,margemPct:mc.pct,status:sf||os.status,savedAt:new Date().toISOString()});
  }
  function concluir(){
    if((os.fotosAntes||[]).length===0){setErrFoto("Adicione pelo menos 1 foto ANTES do serviço.");return;}
    if((os.fotosDepois||[]).length===0){setErrFoto("Adicione pelo menos 1 foto DEPOIS do serviço.");return;}
    if(!(os.assinatura&&os.assinatura.img)){setErrFoto("Colha a assinatura do cliente antes de concluir.");return;}
    const ferrPendentes=(os.ferramentasOS||[]).filter(f=>!f.devolvido);
    if(ferrPendentes.length>0){setErrFoto(`Confirme a recolhimento de ${ferrPendentes.length} ferramenta(s) antes de concluir.`);return;}
    setErrFoto("");
    onSave({...os,totMat,margem:mc.m,margemPct:mc.pct,status:"concluida",concluidoEm:new Date().toISOString(),savedAt:new Date().toISOString()});
  }

  if(!podeEditar){
    return(<div style={{...card,textAlign:"center",padding:"40px 20px"}}>
      <div style={{fontSize:32,marginBottom:12}}>🔒</div>
      <div style={{color:C.gray}}>Esta OS não pode ser editada.<br/>Apenas a gerência pode editar OS de dias anteriores.</div>
      <button style={{...btnS,marginTop:20}} onClick={onCancel}>← Voltar</button>
    </div>);
  }

  if(!isGer&&jaAprovado&&(emExecucao||(init&&init.status)==="em_garantia"||(init&&init.status)==="concluida")){
    return(
      <div>
        <div style={card}>
          <div style={{fontSize:22,fontWeight:700,color:C.amber,fontFamily:"monospace",letterSpacing:2}}>{os.numero}</div>
          <div style={{fontSize:12,color:C.gray,marginTop:2}}>{os.nome} · {os.tipo}</div>
        </div>
        <div style={{...card,borderColor:C.amber+"44"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Execução do serviço</div>
          <label style={lbl}>Diagnóstico técnico</label>
          <textarea style={{...inp,minHeight:70,resize:"vertical",marginBottom:12}} value={os.diag} onChange={e=>s("diag",e.target.value)} placeholder="O que o técnico encontrou no local"/>
          <label style={lbl}>Serviço executado</label>
          <textarea style={{...inp,minHeight:70,resize:"vertical",marginBottom:12}} value={os.exec} onChange={e=>s("exec",e.target.value)} placeholder="O que foi feito de forma objetiva"/>
          <label style={lbl}>Observações</label>
          <textarea style={{...inp,minHeight:60,resize:"vertical"}} value={os.obsExec} onChange={e=>s("obsExec",e.target.value)} placeholder="Situações relevantes"/>
        </div>
        <PainelMidia titulo="Fotos / Vídeos — ANTES do serviço" cor={C.steel} obrigatorio={true}
          itens={os.fotosAntes||[]} onChange={v=>s("fotosAntes",v)} somenteLeitura={false}/>
        <PainelMidia titulo="Fotos / Vídeos — DURANTE o serviço" cor={C.amber} obrigatorio={false}
          itens={os.fotosDurante||[]} onChange={v=>s("fotosDurante",v)} somenteLeitura={false}/>
        <PainelMidia titulo="Fotos / Vídeos — DEPOIS do serviço" cor={C.green} obrigatorio={true}
          itens={os.fotosDepois||[]} onChange={v=>s("fotosDepois",v)} somenteLeitura={false}/>
        <ChecklistFerramentas ferramentasOS={os.ferramentasOS||[]} onChange={v=>s("ferramentasOS",v)} somenteLeitura={false}/>
        <PainelAssinatura
          assinatura={os.assinatura||null}
          onChange={v=>s("assinatura",v)}
          somenteLeitura={false}/>
        {errFoto&&<div style={{...card,borderColor:C.red,background:C.red+"11",color:C.red,fontSize:13,fontWeight:600,padding:"12px 16px"}}>⚠ {errFoto}</div>}
        <div style={{display:"flex",gap:10,justifyContent:"flex-end",paddingBottom:32,flexWrap:"wrap"}}>
          <button style={btnS} onClick={onCancel}>Cancelar</button>
          <button style={btnP} onClick={concluir}>✅ Concluir serviço</button>
        </div>
      </div>
    );
  }

  return(
    <div>
      <div style={card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{fontSize:22,fontWeight:700,color:C.amber,fontFamily:"monospace",letterSpacing:2}}>{os.numero}</div>
            <div style={{fontSize:12,color:C.gray,marginTop:4}}>{fmtD(os.data)}</div>
          </div>
          {isGer
            ?<select style={{...inp,width:"auto"}} value={os.status} onChange={e=>s("status",e.target.value)}>
              <option value="orcamento">Orçamento</option>
              <option value="aprovado_gerente">Aprovado — aguard. início</option>
              <option value="em_andamento">Em andamento</option>
              <option value="aguardando_conclusao">Aguard. aprovação</option>
              <option value="concluida">Concluída</option>
              <option value="em_garantia">Em garantia</option>
              <option value="cancelada">Cancelada</option>
              <option value="devolvida">Devolvida</option>
            </select>
            :<span style={{padding:"4px 14px",borderRadius:20,fontSize:12,fontWeight:700,background:STATUS_COLOR[os.status]+"22",color:STATUS_COLOR[os.status]}}>{STATUS_LABEL[os.status]}</span>
          }
        </div>
      </div>

      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Cliente</div>
        <div style={row}>
          <div style={{flex:2,minWidth:140}}><label style={lbl}>Nome</label><input style={inp} value={os.nome} onChange={e=>s("nome",e.target.value)} placeholder="Nome completo" readOnly={!isGer&&jaAprovado}/></div>
          <div style={{flex:1,minWidth:120}}><label style={lbl}>Telefone</label><input style={inp} value={os.tel} onChange={e=>s("tel",formatTel(e.target.value))} placeholder="(00) 00000-0000" readOnly={!isGer&&jaAprovado}/></div>
        </div>
        <label style={lbl}>Endereço</label>
        <input style={inp} value={os.end} onChange={e=>s("end",e.target.value)} readOnly={!isGer&&jaAprovado}/>
      </div>

      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Serviço</div>
        <div style={row}>
          <div style={{flex:2,minWidth:160}}>
            <label style={lbl}>Tipo</label>
            <select style={inp} value={os.tipo} disabled={!isGer&&jaAprovado} onChange={e=>{const sv=SERVICOS.find(x=>x.n===e.target.value);s("tipo",e.target.value);if(sv)s("hEst",sv.h);}}>
              {SERVICOS.map(x=><option key={x.n} value={x.n}>{x.n}</option>)}
            </select>
          </div>
          <div style={{flex:1,minWidth:100}}><label style={lbl}>Minutos estimados</label><input style={inp} type="number" step="5" min="5" value={os.hEst} readOnly={!isGer&&jaAprovado} onChange={e=>s("hEst",e.target.value)}/></div>
        </div>
        <label style={lbl}>Descrição do serviço</label>
        <textarea style={{...inp,minHeight:70,resize:"vertical",marginBottom:12}} value={os.solicit} readOnly={!isGer&&jaAprovado} onChange={e=>s("solicit",e.target.value)} placeholder="Escreva o que o cliente precisa da forma que ele descreveu"/>
        <label style={lbl}>Observações (opcional)</label>
        <textarea style={{...inp,minHeight:60,resize:"vertical"}} value={os.obsOrcamento} readOnly={!isGer&&jaAprovado} onChange={e=>s("obsOrcamento",e.target.value)}/>
      </div>

      <div style={card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase"}}>Produtos</div>
          {(!jaAprovado||isGer)&&<button style={btnS} onClick={addMat}>+ Adicionar</button>}
        </div>
        {os.mats.length===0&&<div style={{color:C.gray,fontSize:13,textAlign:"center",padding:"12px 0"}}>Nenhum produto</div>}
        {os.mats.map(m=>(
          <div key={m.id} style={{display:"flex",gap:8,marginBottom:8,alignItems:"center",flexWrap:"wrap"}}>
            <input style={{...inp,flex:2,minWidth:120}} placeholder="Nº Notinha Polar Serviços" value={m.notinha||m.d||""} readOnly={!isGer&&jaAprovado} onChange={e=>upMat(m.id,"notinha",e.target.value)}/>
            <input style={{...inp,flex:1,minWidth:80}} placeholder="Descrição (opcional)" value={m.d||""} readOnly={!isGer&&jaAprovado} onChange={e=>upMat(m.id,"d",e.target.value)}/>
            <input style={{...inp,flex:1,minWidth:80}} placeholder="Valor R$" type="number" min={0} value={m.v||""} readOnly={!isGer&&jaAprovado} onChange={e=>upMat(m.id,"v",e.target.value)}/>
            <div style={{fontSize:12,color:C.amber,fontFamily:"monospace",whiteSpace:"nowrap"}}>{fmtR(parseFloat(m.v)||0)}</div>
            {(!jaAprovado||isGer)&&<button onClick={()=>rmMat(m.id)} style={{background:"transparent",border:"1px solid "+C.red,color:C.red,borderRadius:6,padding:"6px 10px",cursor:"pointer",fontSize:12}}>✕</button>}
          </div>
        ))}
        {os.mats.length>0&&<div style={{textAlign:"right",fontSize:13,marginTop:8}}>Total produtos: <span style={{color:C.amber,fontWeight:700}}>{fmtR(totMat)}</span></div>}
      </div>

      {/* Ferramentas — seleção na criação/edição da OS */}
      <SeletorFerramentas selecionadas={os.ferramentasOS||[]} onChange={v=>s("ferramentasOS",v)}/>

      <div style={card}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Financeiro</div>
        {isGer?(
          <>
            <div style={row}><div style={{flex:1,minWidth:140}}>
              <label style={lbl}>Valor total ao cliente (R$)</label>
              <input style={{...inp,color:os.valorTotalEditado?C.orange:C.amber,fontWeight:700}} type="number" min={0} value={os.valorTotal}
                readOnly={jaAprovado&&!["orcamento","devolvida"].includes(os.status)}
                onChange={e=>setOs(p=>({...p,valorTotal:parseFloat(e.target.value)||0,valorTotalEditado:true}))}/>
              {os.valorTotalEditado&&!jaAprovado&&<div style={{fontSize:11,color:C.orange,marginTop:4}}>⚠ Valor editado manualmente</div>}
              {!os.valorTotalEditado&&<div style={{fontSize:11,color:C.gray,marginTop:4}}>Calculado automaticamente</div>}
            </div></div>
            <div style={{background:mColor+"22",border:"1px solid "+mColor+"44",borderRadius:10,padding:16,marginTop:4}}>
              <div style={{fontSize:10,color:C.gray,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:4}}>Margem bruta estimada</div>
              <div style={{fontSize:24,fontWeight:700,color:mColor,fontFamily:"monospace"}}>{mc.pct.toFixed(1)}% · {fmtR(mc.m)}</div>
              <div style={{fontSize:11,color:C.gray,marginTop:8,lineHeight:1.9}}>
                Impostos: {fmtR(mc.imp)} · MO: {fmtR(mc.mo)} · Comissão: {fmtR(mc.com)} · Imprev+Ferr: {fmtR(mc.impr+mc.ferr)} · Desl: {fmtR(mc.desl)}
                {hGar>0&&<><br/><span style={{color:C.teal}}>⚙ Custo MO garantia ({hGar.toFixed(2)}h): {fmtR(mc.custoGarantia)}</span></>}
              </div>
            </div>
          </>
        ):(
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0"}}>
            <span style={{fontSize:16,fontWeight:700}}>Valor total do serviço</span>
            <span style={{fontSize:22,fontWeight:700,color:C.amber,fontFamily:"monospace"}}>{fmtR(os.valorTotal)}</span>
          </div>
        )}
      </div>

      {/* Técnico adicional — aparece para qualquer usuário na criação */}
      {(()=>{
        const tecnicos=(usuarios||[]).filter(u=>u.role==="tecnico"&&u.id!==usuario.id);
        if(tecnicos.length===0)return null;
        return(
          <div style={card}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:12}}>Técnico adicional (opcional)</div>
            <div style={{fontSize:12,color:C.gray,marginBottom:12}}>Se houver um segundo técnico neste serviço, selecione abaixo. A O.S. aparecerá na conta de ambos.</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <label style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,border:"1.5px solid "+((!os.tecnicosAdicionais||os.tecnicosAdicionais.length===0)?"#CC1F1F":"#E0DEDB"),background:(!os.tecnicosAdicionais||os.tecnicosAdicionais.length===0)?"#FFF5F5":"#FAFAFA",cursor:"pointer"}}>
                <input type="radio" checked={!os.tecnicosAdicionais||os.tecnicosAdicionais.length===0} onChange={()=>s("tecnicosAdicionais",[])} style={{accentColor:"#CC1F1F"}}/>
                <span style={{fontWeight:600,fontSize:14}}>Nenhum</span>
              </label>
              {tecnicos.map(t=>{
                const sel=(os.tecnicosAdicionais||[]).includes(t.id);
                return(
                  <label key={t.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,border:"1.5px solid "+(sel?"#2E7D32":"#E0DEDB"),background:sel?"#E8F5E9":"#FAFAFA",cursor:"pointer"}}>
                    <input type="checkbox" checked={sel} onChange={()=>{const cur2=os.tecnicosAdicionais||[];s("tecnicosAdicionais",sel?cur2.filter(x=>x!==t.id):[...cur2,t.id]);}} style={{accentColor:"#2E7D32",width:16,height:16}}/>
                    <span style={{fontWeight:600,fontSize:14}}>{t.nome}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })()}
      <div style={card}><label style={lbl}>Garantia</label><input style={inp} value={os.garantia} onChange={e=>s("garantia",e.target.value)} readOnly={!isGer}/></div>

      <div style={{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap",paddingBottom:32}}>
        <button style={btnS} onClick={onCancel}>Cancelar</button>
        {!isGer&&<button style={btnP} onClick={()=>salvar()}>Salvar orçamento</button>}
        {isGer&&<button style={btnP} onClick={()=>salvar()}>{init?"Salvar alterações":"Criar OS"}</button>}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DETALHE OS
// ════════════════════════════════════════════════════════════════════════
// ── TELA DE CONCLUSÃO COM FOGOS ──────────────────────────────────────────
function TelaConcluidaGerente({os,usuario,usuarios,cfg,onConfirmar,onVoltar}){
  const[senha,setSenha]=useState("");
  const[err,setErr]=useState("");
  const[fogos,setFogos]=useState(true);
  const[ferrOk,setFerrOk]=useState(false);
  const[nfseOk,setNfseOk]=useState(false);

  // Fogos de artifício via canvas
  const cvRef=useRef(null);
  useEffect(()=>{
    if(!fogos||!cvRef.current)return;
    const cv=cvRef.current;
    const ctx=cv.getContext("2d");
    cv.width=cv.offsetWidth; cv.height=cv.offsetHeight;
    const particles=[];
    function boom(x,y,cor){
      for(let i=0;i<80;i++){
        const ang=Math.random()*Math.PI*2;
        const vel=2+Math.random()*6;
        particles.push({x,y,vx:Math.cos(ang)*vel,vy:Math.sin(ang)*vel,life:1,cor,size:2+Math.random()*3});
      }
    }
    const cores=["#CC1F1F","#FFD700","#2E7D32","#1565C0","#FF6B00","#FFFFFF"];
    let frame=0;
    const timer=setInterval(()=>{
      if(frame%40===0){boom(cv.width*(0.2+Math.random()*0.6),cv.height*(0.1+Math.random()*0.5),cores[Math.floor(Math.random()*cores.length)]);}
      frame++;
    },100);
    function draw(){
      ctx.fillStyle="rgba(0,0,0,0.15)";
      ctx.fillRect(0,0,cv.width,cv.height);
      for(let i=particles.length-1;i>=0;i--){
        const p=particles[i];
        p.x+=p.vx; p.y+=p.vy; p.vy+=0.12; p.life-=0.018;
        if(p.life<=0){particles.splice(i,1);continue;}
        ctx.globalAlpha=p.life;
        ctx.fillStyle=p.cor;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
      }
      ctx.globalAlpha=1;
      if(fogos)requestAnimationFrame(draw);
    }
    draw();
    const stop=setTimeout(()=>{setFogos(false);clearInterval(timer);},6000);
    return()=>{clearInterval(timer);clearTimeout(stop);};
  },[fogos]);

  function confirmar(){
    const ger=(usuarios||[]).find(u=>u.senha===senha&&(u.role==="gerencia"||u.role==="admin"));
    if(!ger){setErr("Senha incorreta.");return;}
    onConfirmar(ger);
  }

  return(
    <div style={{position:"fixed",inset:0,zIndex:500,background:"#0A0A0A",display:"flex",flexDirection:"column",overflowY:"auto"}}>
      {/* Canvas fogos */}
      {fogos&&<canvas ref={cvRef} style={{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:501}}/>}

      <div style={{position:"relative",zIndex:502,maxWidth:480,margin:"0 auto",padding:"32px 20px 60px",width:"100%"}}>
        {/* Título */}
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:64,marginBottom:8}}>🏁</div>
          <div style={{fontSize:28,fontWeight:900,color:"#FFFFFF",letterSpacing:1}}>Serviço Concluído!</div>
          <div style={{fontSize:14,color:"#AAAAAA",marginTop:8}}>{os.numero} · {os.nome||"Cliente"}</div>
        </div>

        {/* Checklist pós-serviço */}
        <div style={{background:"#1A1A1A",borderRadius:14,padding:20,marginBottom:20,border:"1px solid #2A2A2A"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:"#AAAAAA",textTransform:"uppercase",marginBottom:16}}>Antes de ir embora</div>

          {/* NFSe */}
          <label style={{display:"flex",alignItems:"center",gap:14,padding:"14px 0",borderBottom:"1px solid #2A2A2A",cursor:"pointer"}} onClick={()=>setNfseOk(v=>!v)}>
            <div style={{width:28,height:28,borderRadius:8,border:"2px solid "+(nfseOk?"#2E7D32":"#555"),background:nfseOk?"#2E7D32":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.2s"}}>
              {nfseOk&&<span style={{color:"#fff",fontSize:16,fontWeight:700}}>✓</span>}
            </div>
            <div>
              <div style={{fontWeight:700,color:"#FFFFFF",fontSize:15}}>📄 Emitir NFSe</div>
              <div style={{fontSize:12,color:"#888",marginTop:2}}>Passar ao caixa para emissão da nota fiscal</div>
            </div>
          </label>

          {/* Ferramentas */}
          <label style={{display:"flex",alignItems:"center",gap:14,padding:"14px 0",cursor:"pointer"}} onClick={()=>setFerrOk(v=>!v)}>
            <div style={{width:28,height:28,borderRadius:8,border:"2px solid "+(ferrOk?"#2E7D32":"#555"),background:ferrOk?"#2E7D32":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.2s"}}>
              {ferrOk&&<span style={{color:"#fff",fontSize:16,fontWeight:700}}>✓</span>}
            </div>
            <div>
              <div style={{fontWeight:700,color:"#FFFFFF",fontSize:15}}>🔧 Guardar ferramentas</div>
              <div style={{fontSize:12,color:"#888",marginTop:2}}>Confirmar que todas foram guardadas no lugar certo</div>
            </div>
          </label>
        </div>

        {/* Feedback WhatsApp */}
        <div style={{background:"#1A1A1A",borderRadius:14,padding:20,marginBottom:20,border:"1px solid #2A2A2A"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:"#AAAAAA",textTransform:"uppercase",marginBottom:16}}>💬 Feedback via WhatsApp</div>
          {os.tel?(
            <div>
              <div style={{fontSize:13,color:"#888",marginBottom:12,lineHeight:1.6,background:"#2A2A2A",borderRadius:8,padding:"10px 14px"}}>
                {((cfg&&cfg.msgFeedback)||"Olá {nome}! Como foi o serviço?").replace("{nome}",os.nome||"cliente").replace("{servico}",os.tipo||"serviço")}
              </div>
              <button style={{width:"100%",background:"#25D366",color:"#FFFFFF",border:"none",borderRadius:10,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer"}}
                onClick={()=>{const t=(os.tel||"").replace(/\D/g,"");const m=((cfg&&cfg.msgFeedback)||"Olá {nome}! Como foi o serviço?").replace("{nome}",os.nome||"cliente").replace("{servico}",os.tipo||"serviço");window.open("https://wa.me/55"+t+"?text="+encodeURIComponent(m),"_blank");}}>
                📲 Enviar feedback pelo WhatsApp
              </button>
            </div>
          ):(
            <div style={{fontSize:13,color:"#666"}}>⚠ Telefone do cliente não cadastrado.</div>
          )}
        </div>

        {/* Aprovação do gerente */}
        <div style={{background:"#1A1A1A",borderRadius:14,padding:20,border:"1px solid #2A2A2A"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:"#AAAAAA",textTransform:"uppercase",marginBottom:16}}>Aprovação do gerente</div>
          <div style={{fontSize:13,color:"#888",marginBottom:16}}>Um gerente deve confirmar a conclusão do serviço.</div>
          <label style={{fontSize:11,color:"#888",fontWeight:700,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:6}}>Senha do gerente</label>
          <input type="password" autoComplete="new-password" style={{width:"100%",background:"#2A2A2A",border:"1px solid #3A3A3A",borderRadius:8,padding:"12px",color:"#FFFFFF",fontSize:22,letterSpacing:6,textAlign:"center",outline:"none",boxSizing:"border-box",marginBottom:14}} value={senha} onChange={e=>setSenha(e.target.value)} placeholder="••••••" onKeyDown={e=>e.key==="Enter"&&confirmar()}/>
          {err&&<div style={{color:"#FF6B6B",fontSize:13,marginBottom:12,fontWeight:600}}>⚠ {err}</div>}
          <button style={{width:"100%",background:"#CC1F1F",color:"#FFFFFF",border:"none",borderRadius:10,padding:"14px",fontWeight:700,fontSize:16,cursor:"pointer"}} onClick={confirmar}>
            ✅ Confirmar conclusão
          </button>
          <button style={{width:"100%",background:"transparent",color:"#888",border:"1px solid #3A3A3A",borderRadius:10,padding:"12px",fontWeight:600,fontSize:14,cursor:"pointer",marginTop:10}} onClick={onVoltar}>
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  );
}


// ── MODAL: Reatribuir OS a outro técnico ─────────────────────────────────
// ── MODAL: Editar horário manualmente (gerência) ──────────────────────────
function ModalEditarHorario({trecho,usuarios,onConfirmar,onFechar,onExcluir}){
  function toDatetimeLocal(iso){
    if(!iso)return "";
    const d=new Date(iso);
    const pad=n=>String(n).padStart(2,"0");
    return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+"T"+pad(d.getHours())+":"+pad(d.getMinutes());
  }
  function fromDatetimeLocal(v){
    if(!v)return null;
    return new Date(v).toISOString();
  }

  const[saidaVal,setSaidaVal]=useState(toDatetimeLocal(trecho.saidaLoja||trecho.saida));
  const[retornoVal,setRetornoVal]=useState(toDatetimeLocal(trecho.chegadaLoja||trecho.retorno));
  const[login,setLogin]=useState("");
  const[senha,setSenha]=useState("");
  const[err,setErr]=useState("");
  const[confirmandoExclusao,setConfirmandoExclusao]=useState(false);

  function validarGerente(){
    const ger=(usuarios||[]).find(u=>u.login.trim().toLowerCase()===login.trim().toLowerCase()&&u.senha===senha&&(u.role==="gerencia"||u.role==="admin"));
    if(!ger){setErr("Login ou senha de gerente incorretos.");return null;}
    return ger;
  }

  function salvar(){
    const ger=validarGerente();
    if(!ger)return;
    const novaSaida=fromDatetimeLocal(saidaVal);
    const novoRetorno=fromDatetimeLocal(retornoVal);
    if(!novaSaida){setErr("Informe pelo menos o horário de saída.");return;}
    if(novoRetorno&&new Date(novoRetorno)<new Date(novaSaida)){setErr("O retorno não pode ser antes da saída.");return;}
    onConfirmar({saida:novaSaida,retorno:novoRetorno,editadoPor:ger.nome,editadoEm:new Date().toISOString()});
  }

  function excluir(){
    const ger=validarGerente();
    if(!ger)return;
    onExcluir();
  }

  return(
    <div style={{position:"fixed",inset:0,zIndex:600,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onFechar}>
      <div style={{background:"#FFFFFF",borderRadius:16,padding:24,maxWidth:420,width:"100%",maxHeight:"90vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:16,fontWeight:700,marginBottom:4,color:"#1A1A1A"}}>✏ Editar registro de horário</div>
        <div style={{fontSize:13,color:"#888",marginBottom:20}}>Use isso quando o técnico esqueceu de registrar saída ou retorno.</div>

        <label style={{fontSize:11,color:"#555",fontWeight:700,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:6}}>Saída da loja</label>
        <input type="datetime-local" style={{width:"100%",background:"#F7F6F4",border:"1px solid #D8D5D0",borderRadius:8,padding:"10px 12px",fontSize:14,marginBottom:14,boxSizing:"border-box"}} value={saidaVal} onChange={e=>setSaidaVal(e.target.value)}/>

        <label style={{fontSize:11,color:"#555",fontWeight:700,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:6}}>Retorno à loja (opcional)</label>
        <input type="datetime-local" style={{width:"100%",background:"#F7F6F4",border:"1px solid #D8D5D0",borderRadius:8,padding:"10px 12px",fontSize:14,marginBottom:20,boxSizing:"border-box"}} value={retornoVal} onChange={e=>setRetornoVal(e.target.value)}/>

        <div style={{background:"#FFF8E1",border:"1px solid #FFE082",borderRadius:10,padding:16,marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:"#E65100",textTransform:"uppercase",marginBottom:10,letterSpacing:1}}>Confirmação do gerente</div>
          <input style={{width:"100%",background:"#FFFFFF",border:"1px solid #D8D5D0",borderRadius:8,padding:"10px 12px",fontSize:14,marginBottom:10,boxSizing:"border-box"}} value={login} onChange={e=>setLogin(e.target.value)} placeholder="login do gerente" autoComplete="off"/>
          <input type="password" style={{width:"100%",background:"#FFFFFF",border:"1px solid #D8D5D0",borderRadius:8,padding:"10px 12px",fontSize:14,boxSizing:"border-box"}} value={senha} onChange={e=>setSenha(e.target.value)} placeholder="senha" onKeyDown={e=>e.key==="Enter"&&salvar()}/>
        </div>

        {err&&<div style={{color:"#B71C1C",fontSize:13,marginBottom:14,fontWeight:600}}>⚠ {err}</div>}

        {!confirmandoExclusao?(
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"flex",gap:10}}>
              <button style={{flex:1,background:"#F0F0EE",color:"#444",border:"1px solid #D0CEC9",borderRadius:8,padding:"12px",fontWeight:600,fontSize:14,cursor:"pointer"}} onClick={onFechar}>Cancelar</button>
              <button style={{flex:2,background:"#CC1F1F",color:"#FFFFFF",border:"none",borderRadius:8,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer"}} onClick={salvar}>Salvar alteração</button>
            </div>
            <button style={{background:"transparent",color:"#B71C1C",border:"1px solid #FFCDD2",borderRadius:8,padding:"10px",fontWeight:600,fontSize:13,cursor:"pointer"}} onClick={()=>setConfirmandoExclusao(true)}>
              🗑 Excluir este registro
            </button>
          </div>
        ):(
          <div>
            <div style={{fontSize:13,color:"#B71C1C",marginBottom:12,fontWeight:600}}>Tem certeza? Esta ação não pode ser desfeita.</div>
            <div style={{display:"flex",gap:10}}>
              <button style={{flex:1,background:"#F0F0EE",color:"#444",border:"1px solid #D0CEC9",borderRadius:8,padding:"12px",fontWeight:600,fontSize:14,cursor:"pointer"}} onClick={()=>setConfirmandoExclusao(false)}>Cancelar</button>
              <button style={{flex:1,background:"#B71C1C",color:"#FFFFFF",border:"none",borderRadius:8,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer"}} onClick={excluir}>Sim, excluir</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// ── MODAL: Reatribuir OS a outro técnico ─────────────────────────────────
// ── MODAL: Senha do gerente para liberar saída/retorno da loja ──────────
function ModalSenhaGerente({onConfirmar,onFechar,err}){
  const[senha,setSenha]=useState("");
  return(
    <div style={{position:"fixed",inset:0,zIndex:600,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onFechar}>
      <div style={{background:"#FFFFFF",borderRadius:16,padding:24,maxWidth:340,width:"100%"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:16,fontWeight:700,marginBottom:4,color:"#1A1A1A"}}>🔐 Autorização do gerente</div>
        <div style={{fontSize:13,color:"#888",marginBottom:20}}>Digite a senha do gerente para liberar.</div>
        <label style={{fontSize:11,color:"#555",fontWeight:700,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:6}}>Senha do gerente</label>
        <input type="password" autoComplete="new-password" style={{width:"100%",background:"#F7F6F4",border:"1px solid #D8D5D0",borderRadius:8,padding:"12px",fontSize:22,letterSpacing:6,textAlign:"center",marginBottom:16,boxSizing:"border-box"}} value={senha} onChange={e=>setSenha(e.target.value)} placeholder="••••••" onKeyDown={e=>e.key==="Enter"&&onConfirmar(senha)}/>
        {err&&<div style={{color:"#B71C1C",fontSize:13,marginBottom:14,fontWeight:600}}>⚠ {err}</div>}
        <div style={{display:"flex",gap:10}}>
          <button style={{flex:1,background:"#F0F0EE",color:"#444",border:"1px solid #D0CEC9",borderRadius:8,padding:"12px",fontWeight:600,fontSize:14,cursor:"pointer"}} onClick={onFechar}>Cancelar</button>
          <button style={{flex:2,background:"#CC1F1F",color:"#FFFFFF",border:"none",borderRadius:8,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer"}} onClick={()=>onConfirmar(senha)}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

function ModalAtribuirTecnico({usuarios,onConfirmar,onFechar}){
  const tecnicos=(usuarios||[]).filter(u=>u.role==="tecnico");
  const[selecionado,setSelecionado]=useState(null);
  return(
    <div style={{position:"fixed",inset:0,zIndex:600,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onFechar}>
      <div style={{background:"#FFFFFF",borderRadius:16,padding:24,maxWidth:400,width:"100%",maxHeight:"80vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:16,fontWeight:700,marginBottom:4,color:"#1A1A1A"}}>Reatribuir Ordem de Serviço</div>
        <div style={{fontSize:13,color:"#888",marginBottom:20}}>Selecione o técnico que ficará responsável por esta OS.</div>
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
          {tecnicos.length===0&&<div style={{fontSize:13,color:"#888",textAlign:"center",padding:"20px 0"}}>Nenhum técnico cadastrado.</div>}
          {tecnicos.map(t=>(
            <label key={t.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:10,border:"1.5px solid "+(selecionado===t.id?"#CC1F1F":"#E0DEDB"),background:selecionado===t.id?"#FFF5F5":"#FAFAFA",cursor:"pointer"}} onClick={()=>setSelecionado(t.id)}>
              <input type="radio" checked={selecionado===t.id} onChange={()=>setSelecionado(t.id)} style={{accentColor:"#CC1F1F"}}/>
              <div style={{fontWeight:600,fontSize:14}}>{t.nome}</div>
            </label>
          ))}
        </div>
        <div style={{display:"flex",gap:10}}>
          <button style={{flex:1,background:"#F0F0EE",color:"#444",border:"1px solid #D0CEC9",borderRadius:8,padding:"12px",fontWeight:600,fontSize:14,cursor:"pointer"}} onClick={onFechar}>Cancelar</button>
          <button style={{flex:1,background:selecionado?"#CC1F1F":"#CCCCCC",color:"#FFFFFF",border:"none",borderRadius:8,padding:"12px",fontWeight:700,fontSize:14,cursor:selecionado?"pointer":"not-allowed"}} disabled={!selecionado} onClick={()=>{const t=tecnicos.find(x=>x.id===selecionado);if(t)onConfirmar(t);}}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

function Detalhe({os,usuario,cfg,onBack,onEdit,onUpdate,usuarios,onDelete}){
  const isGer=usuario.role==="gerencia"||usuario.role==="admin";
  const totMat=(os.mats||[]).reduce((a,m)=>a+(parseFloat(m.q)||0)*(parseFloat(m.v)||0),0)||0;
  const sc=STATUS_COLOR[os.status]||C.gray;
  const desl=os.deslocamentos||[];
  const gars=os.garantias||[];
  const hDesl=parseFloat(somaHoras(desl).toFixed(2));
  const hGar=parseFloat(somaHoras(gars).toFixed(2));
  const trechoAberto=desl.find(d=>d.saida&&!d.retorno);
  const garAberta=gars.find(d=>d.saida&&!d.retorno);
  const emAndamento=os.status==="em_andamento";
  const emGarantia=os.status==="em_garantia";
  const [telaConclusao,setTelaConclusao]=useState(false);
  const [atribuindo,setAtribuindo]=useState(false);
  const [editandoTrecho,setEditandoTrecho]=useState(null); // {tipo:"servico"|"garantia", trecho}
  const [confirmacaoPendente,setConfirmacaoPendente]=useState(null); // função a executar após senha
  const [errSenha,setErrSenha]=useState("");

  // Verificação por senha do gerente — substitui geolocalização
  function verificarSenhaGerente(onSucesso){
    setErrSenha("");
    setConfirmacaoPendente(()=>onSucesso);
  }

  function confirmarSenhaGerente(senha){
    const ger=(usuarios||[]).find(u=>u.senha===senha&&(u.role==="gerencia"||u.role==="admin"));
    if(!ger){setErrSenha("Senha incorreta.");return;}
    setErrSenha("");
    const fn=confirmacaoPendente;
    setConfirmacaoPendente(null);
    if(fn)fn(ger);
  }

  function iniciar(){
    const agora=new Date().toISOString();
    onUpdate({...os,status:"em_andamento",iniciadoEm:agora,etapaExecucao:0,savedAt:agora});
  }

  // Saiu DA LOJA — requer senha do gerente
  function saidaLoja(){
    verificarSenhaGerente((ger)=>{
      const agora=new Date().toISOString();
      // Zerar recolhimento — técnico ainda não recolheu ao sair novamente
      const ferrZeradas=(os.ferramentasOS||[]).map(f=>({...f,devolvido:false,devolvidoEm:null}));
      onUpdate({...os,deslocamentos:[...desl,{id:Date.now(),saidaLoja:agora,chegadaLocal:null,saidaLocal:null,chegadaLoja:null,retorno:null,liberadoPorSaida:ger.nome}],ferramentasOS:ferrZeradas,etapaExecucao:0,savedAt:agora});
    });
  }

  // Chegou no LOCAL do serviço — sem senha
  function chegadaLocal(){
    const agora=new Date().toISOString();
    const nd=[...desl];const idx=nd.findIndex(d=>d.saidaLoja&&!d.chegadaLocal);
    if(idx>=0)nd[idx]={...nd[idx],chegadaLocal:agora};
    onUpdate({...os,deslocamentos:nd,etapaExecucao:0,savedAt:agora});
  }

  // Saiu do LOCAL — sem senha, mas ferramentas obrigatórias
  function saidaLocal(){
    const agora=new Date().toISOString();
    const nd=[...desl];const idx=nd.findIndex(d=>d.chegadaLocal&&!d.saidaLocal);
    if(idx>=0)nd[idx]={...nd[idx],saidaLocal:agora,saida:nd[idx].saidaLoja,retorno:null};
    onUpdate({...os,deslocamentos:nd,savedAt:agora});
  }

  // Chegou NA LOJA — requer senha do gerente
  function chegadaLoja(){
    verificarSenhaGerente((ger)=>{
      const agora=new Date().toISOString();
      const nd=[...desl];const idx=nd.findIndex(d=>d.saidaLocal&&!d.chegadaLoja);
      if(idx>=0)nd[idx]={...nd[idx],chegadaLoja:agora,retorno:agora,liberadoPorRetorno:ger.nome};
      onUpdate({...os,deslocamentos:nd,hReal:parseFloat(somaHoras(nd).toFixed(2)),savedAt:agora});
    });
  }

  // Manter compatibilidade com fluxo antigo
  function saidaServico(){
    const agora=new Date().toISOString();
    onUpdate({...os,deslocamentos:[...desl,{id:Date.now(),saidaLoja:agora,chegadaLocal:null,saidaLocal:null,chegadaLoja:null,saida:agora,retorno:null}],etapaExecucao:0,savedAt:agora});
  }

  function retornoServico(){
    // Pendente: mantém em_andamento e volta para lista
    const agora=new Date().toISOString();
    onUpdate({...os,savedAt:agora});
    onBack();
  }

  function encerrarServico(){
    // Abre tela de conclusão com fogos
    setTelaConclusao(true);
  }

  function confirmarConclusao(gerente){
    const agora=new Date().toISOString();
    const nd=[...desl];const idx=nd.findIndex(d=>d.saida&&!d.retorno);
    if(idx>=0)nd[idx]={...nd[idx],retorno:agora};
    onUpdate({...os,deslocamentos:nd,hReal:parseFloat(somaHoras(nd).toFixed(2)),concluidoEm:agora,status:"concluida",aprovadoPor:gerente.id,aprovadoPorNome:gerente.nome,savedAt:agora});
    setTelaConclusao(false);
  }
  function atribuirTecnico(tecnico){
    onUpdate({...os,tecnicoAtribuido:tecnico.id,tecnicoAtribuidoNome:tecnico.nome,savedAt:new Date().toISOString()});
    setAtribuindo(false);
  }

  function salvarHorarioEditado(dados){
    if(!editandoTrecho)return;
    const{tipo,trecho}=editandoTrecho;
    const lista=tipo==="garantia"?[...gars]:[...desl];
    const idx=lista.findIndex(d=>d.id===trecho.id);
    if(idx>=0){
      // Editando trecho existente — mantém os demais campos do fluxo intactos
      const atual=lista[idx];
      lista[idx]={
        ...atual,
        saida:dados.saida,
        saidaLoja:atual.saidaLoja?dados.saida:atual.saidaLoja,
        retorno:dados.retorno,
        chegadaLoja:atual.chegadaLoja?dados.retorno:atual.chegadaLoja,
        editadoManualmentePor:dados.editadoPor,
        editadoManualmenteEm:dados.editadoEm
      };
    } else {
      // Novo registro manual — técnico esqueceu de registrar
      lista.push({
        id:trecho.id,
        saida:dados.saida,
        saidaLoja:dados.saida,
        retorno:dados.retorno,
        chegadaLoja:dados.retorno,
        criadoManualmentePor:dados.editadoPor,
        criadoManualmenteEm:dados.editadoEm
      });
    }
    const campo=tipo==="garantia"?"garantias":"deslocamentos";
    const patch={...os,[campo]:lista,savedAt:new Date().toISOString()};
    if(tipo!=="garantia")patch.hReal=parseFloat(somaHoras(lista).toFixed(2));
    onUpdate(patch);
    setEditandoTrecho(null);
  }

  function excluirHorarioEditado(){
    if(!editandoTrecho)return;
    const{tipo,trecho}=editandoTrecho;
    const origem=tipo==="garantia"?gars:desl;
    const lista=origem.filter(d=>d.id!==trecho.id);
    const campo=tipo==="garantia"?"garantias":"deslocamentos";
    const patch={...os,[campo]:lista,savedAt:new Date().toISOString()};
    if(tipo!=="garantia")patch.hReal=parseFloat(somaHoras(lista).toFixed(2));
    onUpdate(patch);
    setEditandoTrecho(null);
  }

  function saidaGarantia(){
    const agora=new Date().toISOString();
    onUpdate({...os,garantias:[...gars,{id:Date.now(),saida:agora,retorno:null}],savedAt:agora});
  }
  function retornoGarantia(){
    const agora=new Date().toISOString();
    const ng=[...gars];const idx=ng.findIndex(d=>d.saida&&!d.retorno);
    if(idx>=0)ng[idx]={...ng[idx],retorno:agora};
    onUpdate({...os,garantias:ng,savedAt:agora});
  }
  function encerrarGarantia(){
    const agora=new Date().toISOString();
    const ng=[...gars];const idx=ng.findIndex(d=>d.saida&&!d.retorno);
    if(idx>=0)ng[idx]={...ng[idx],retorno:agora};
    onUpdate({...os,garantias:ng,status:"concluida",savedAt:agora});
  }
  function abrirGarantia(){
    onUpdate({...os,status:"em_garantia",savedAt:new Date().toISOString()});
  }

  return(
    <>
    {telaConclusao&&(
      <TelaConcluidaGerente
        os={os}
        usuario={usuario}
        usuarios={usuarios||[]}
        cfg={cfg}
        onConfirmar={confirmarConclusao}
        onVoltar={()=>setTelaConclusao(false)}
      />
    )}
    {atribuindo&&(
      <ModalAtribuirTecnico
        usuarios={usuarios||[]}
        onConfirmar={atribuirTecnico}
        onFechar={()=>setAtribuindo(false)}
      />
    )}
    {editandoTrecho&&(
      <ModalEditarHorario
        trecho={editandoTrecho.trecho}
        usuarios={usuarios||[]}
        onConfirmar={salvarHorarioEditado}
        onExcluir={excluirHorarioEditado}
        onFechar={()=>setEditandoTrecho(null)}
      />
    )}
    {confirmacaoPendente&&(
      <ModalSenhaGerente
        err={errSenha}
        onConfirmar={confirmarSenhaGerente}
        onFechar={()=>{setConfirmacaoPendente(null);setErrSenha("");}}
      />
    )}
    <div>
      {/* header + serviço — card único com fundo escuro/verde */}
      <div style={{background:os.status==="concluida"?"#1B5E20":"#2C2C2C",borderRadius:14,padding:20,marginBottom:16,border:"1px solid "+(os.status==="concluida"?"#2E7D32":"#3A3A3A"),boxShadow:"0 2px 8px rgba(0,0,0,0.18)"}}>
        {/* topo: número + status */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16}}>
          <div>
            <div style={{fontSize:10,color:"#AAAAAA",letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Ordem de Serviço</div>
            <div style={{fontSize:24,fontWeight:800,color:"#CC1F1F",fontFamily:"monospace",letterSpacing:2}}>{os.numero}</div>
            <div style={{fontSize:13,color:"#AAAAAA",marginTop:4}}>{fmtD(os.data)}</div>
          </div>
          <span style={{display:"inline-block",padding:"6px 16px",borderRadius:20,fontSize:12,fontWeight:700,background:sc+"33",color:sc,border:"1px solid "+sc+"66"}}>{STATUS_LABEL[os.status]}</span>
        </div>

        {/* cliente + local */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,paddingBottom:14,borderBottom:"1px solid #3A3A3A",marginBottom:14}}>
          <div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Cliente</div><div style={{fontWeight:600,color:"#FFFFFF"}}>{os.nome||"—"}</div><div style={{fontSize:13,color:"#AAAAAA"}}>{os.tel}</div></div>
          <div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Local</div><div style={{fontSize:13,color:"#FFFFFF"}}>{os.end||"—"}</div></div>
        </div>

        {/* técnicos envolvidos — visível para todos */}
        {(()=>{
          const criador=(usuarios||[]).find(u=>u.id===os.criadoPor);
          const atribuido=os.tecnicoAtribuidoNome;
          const adicionais=(os.tecnicosAdicionais||[]).map(id=>{const u=(usuarios||[]).find(x=>x.id===id);return u?u.nome:null;}).filter(Boolean);
          const nomes=[];
          if(criador&&criador.role==="tecnico")nomes.push(criador.nome);
          if(atribuido&&!nomes.includes(atribuido))nomes.push(atribuido);
          adicionais.forEach(n=>{if(!nomes.includes(n))nomes.push(n);});
          if(nomes.length===0)return null;
          return(
            <div style={{paddingBottom:14,borderBottom:"1px solid "+(os.status==="concluida"?"#2E7D32":"#3A3A3A"),marginBottom:14}}>
              <div style={{fontSize:10,color:"#AAAAAA",textTransform:"uppercase",marginBottom:6,letterSpacing:1}}>
                {nomes.length===1?"Técnico":"Técnicos"}
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {nomes.map((n,i)=>(
                  <span key={i} style={{background:"rgba(255,255,255,0.12)",color:"#FFFFFF",borderRadius:20,padding:"4px 12px",fontSize:13,fontWeight:600}}>👷 {n}</span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* técnico atribuído — gerência pode reatribuir */}
        {isGer&&(
          <div style={{paddingBottom:14,borderBottom:"1px solid "+(os.status==="concluida"?"#2E7D32":"#3A3A3A"),marginBottom:14,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Técnico responsável</div>
              <div style={{fontWeight:600,color:"#FFFFFF"}}>{os.tecnicoAtribuidoNome||"—"}</div>
            </div>
            <button style={{background:"#3A3A3A",color:"#FFF",border:"1px solid #4A4A4A",borderRadius:8,padding:"8px 14px",fontSize:12,fontWeight:600,cursor:"pointer"}} onClick={()=>setAtribuindo(true)}>
              🔄 Reatribuir
            </button>
          </div>
        )}

        {/* serviço */}
        <div style={{display:"flex",gap:20,flexWrap:"wrap",marginBottom:(os.solicit||os.obsOrcamento||os.relatorio||os.diag)?14:0}}>
          <div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Tipo</div><div style={{fontWeight:600,color:"#FFFFFF"}}>{os.tipo}</div></div>
          <div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Estimado</div><div style={{fontWeight:600,color:"#FFFFFF"}}>{os.hEst}min</div></div>
          {hDesl>0&&<div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Tempo real</div><div style={{fontWeight:600,color:"#CC1F1F"}}>{hDesl}h</div></div>}
          {hGar>0&&<div><div style={{fontSize:10,color:C.teal,textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Garantia</div><div style={{fontWeight:600,color:C.teal}}>{hGar}h</div></div>}
        </div>

        {os.solicit&&<div style={{marginBottom:10}}><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Solicitado</div><div style={{fontSize:14,color:"#E0E0E0"}}>{os.solicit}</div></div>}
        {os.obsOrcamento&&<div style={{marginBottom:10}}><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Observações</div><div style={{fontSize:14,color:"#E0E0E0"}}>{os.obsOrcamento}</div></div>}
        {(os.relatorio||os.diag||os.exec)&&(
          <div><div style={{fontSize:10,color:"#888",textTransform:"uppercase",marginBottom:4,letterSpacing:1}}>Diagnóstico / Executado</div><div style={{fontSize:14,color:"#E0E0E0",whiteSpace:"pre-wrap"}}>{os.relatorio||[os.diag,os.exec,os.obsExec].filter(Boolean).join("\n\n")}</div></div>
        )}
      </div>

      {/* painel de trechos — serviço principal */}
      {(desl.length>0||emAndamento)&&(
        <PainelTrechos
          titulo="Controle de tempo — Serviço"
          cor={C.amber}
          trechos={desl}
          emAndamento={emAndamento&&!os.concluidoEm}
          onSaida={saidaLoja}
          onRetorno={retornoServico}
          onEncerrar={encerrarServico}
          onChegadaLocal={chegadaLocal}
          onSaidaLocal={saidaLocal}
          onChegadaLoja={chegadaLoja}
          labelSaida="Saí da loja"
          execucaoInline={emAndamento&&!os.concluidoEm}
          os={os}
          onUpdateOS={onUpdate}
          isGer={isGer}
          onEditarTrecho={trecho=>setEditandoTrecho({tipo:"servico",trecho})}
        />
      )}

      {/* painel de trechos — garantia */}
      {(gars.length>0||emGarantia)&&(
        <PainelTrechos
          titulo="Controle de tempo — Garantia"
          cor={C.teal}
          trechos={gars}
          aberto={!!garAberta}
          emAndamento={emGarantia}
          onSaida={saidaGarantia}
          onRetorno={retornoGarantia}
          onEncerrar={encerrarGarantia}
          labelSaida="Saí para garantia"
          labelRetorno="Retornei à loja"
          labelEncerrar="Encerrar garantia"
          isGer={isGer}
          onEditarTrecho={trecho=>setEditandoTrecho({tipo:"garantia",trecho})}
        />
      )}



      {/* fotos */}
      {((os.fotosAntes?os.fotosAntes.length:0)>0||(os.fotosDurante?os.fotosDurante.length:0)>0||(os.fotosDepois?os.fotosDepois.length:0)>0)&&(
        <>
          {(os.fotosAntes?os.fotosAntes.length:0)>0&&<PainelMidia titulo="Fotos / Vídeos — ANTES" cor={C.steel} obrigatorio={false} itens={os.fotosAntes} onChange={()=>{}} somenteLeitura={true}/>}
          {(os.fotosDurante?os.fotosDurante.length:0)>0&&<PainelMidia titulo="Fotos / Vídeos — DURANTE" cor={C.amber} obrigatorio={false} itens={os.fotosDurante} onChange={()=>{}} somenteLeitura={true}/>}
          {(os.fotosDepois?os.fotosDepois.length:0)>0&&<PainelMidia titulo="Fotos / Vídeos — DEPOIS" cor={C.green} obrigatorio={false} itens={os.fotosDepois} onChange={()=>{}} somenteLeitura={true}/>}
        </>
      )}

      {/* assinatura */}
      {(os.assinatura||["concluida","aguardando_conclusao","em_garantia"].includes(os.status))&&(
        <PainelAssinatura assinatura={os.assinatura||null} onChange={()=>{}} somenteLeitura={true}/>
      )}

      {/* ferramentas */}
      {/* ferramentas — só mostra resumo se já concluída */}
      {(os.ferramentasOS||[]).length>0&&["concluida","em_garantia","aguardando_conclusao"].includes(os.status)&&(
        <ChecklistFerramentas ferramentasOS={os.ferramentasOS} onChange={()=>{}} somenteLeitura={true}/>
      )}

      {/* materiais */}
      {(os.mats?os.mats.length:0)>0&&(
        <div style={card}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Produtos</div>
          {os.mats.map((m,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.navyLight}`,fontSize:14}}>
              <span>{m.d} <span style={{color:C.gray}}>x{m.q}</span></span>
              <span style={{color:C.amber,fontFamily:"monospace"}}>{fmtR((parseFloat(m.q)||0)*(parseFloat(m.v)||0))}</span>
            </div>
          ))}
        </div>
      )}

      {/* financeiro */}
      <div style={card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
          <span style={{fontSize:16,fontWeight:700}}>Total do serviço</span>
          <span style={{fontSize:24,fontWeight:700,color:C.amber,fontFamily:"monospace"}}>{fmtR(parseFloat(os.valorTotal)||0)}</span>
        </div>
        {isGer&&os.margemPct!=null&&(
          <div style={{marginTop:12,padding:"10px 14px",background:(os.margemPct>30?C.green:os.margemPct>15?C.amber:C.red)+"11",borderRadius:8,border:`1px solid ${(os.margemPct>30?C.green:os.margemPct>15?C.amber:C.red)}33`,fontSize:13,color:os.margemPct>30?C.green:os.margemPct>15?C.amber:C.red}}>
            Margem bruta: {os.margemPct.toFixed(1)}% · {fmtR(os.margem)}
            {hGar>0&&<span style={{color:C.teal,marginLeft:12}}>· Custo garantia: {fmtR(os.margem!=null?(hGar*((os.cfg&&os.cfg.custoMOHora)||35)):0)}</span>}
          </div>
        )}
        {os.garantia&&<div style={{marginTop:12,padding:"10px 14px",background:C.green+"11",borderRadius:8,border:`1px solid ${C.green}33`,fontSize:13,color:C.green}}>✓ Garantia: {os.garantia}</div>}
        {hGar>0&&isGer&&(
          <div style={{marginTop:10,padding:"10px 14px",background:C.teal+"11",borderRadius:8,border:`1px solid ${C.teal}33`,fontSize:13,color:C.teal}}>
            ⚙ Tempo de garantia utilizado: {hGar}h — {gars.filter(d=>d.retorno).length} visita(s)
          </div>
        )}
      </div>

      {/* ações contextuais */}
      {/* APROVAÇÃO — técnico ou gerência podem aprovar o orçamento */}
      {os.status==="orcamento"&&(
        <div style={{...card,borderColor:C.amber+"66",background:C.amber+"0a"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:8}}>Aguardando aprovação do cliente</div>
          <div style={{fontSize:13,color:C.white,marginBottom:14}}>Após o cliente aprovar o orçamento, clique abaixo para registrar e iniciar o serviço.</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button style={btnPu} onClick={()=>gerarPDF(os)}>📄 Gerar PDF do orçamento</button>
            <button style={btnG} onClick={()=>onUpdate({...os,status:"aprovado_gerente",aprovadoPor:usuario.id,savedAt:new Date().toISOString()})}>✓ Cliente aprovou — registrar</button>
            {isGer&&<button style={btnR} onClick={()=>onUpdate({...os,status:"devolvida",savedAt:new Date().toISOString()})}>↩ Devolver</button>}
          </div>
        </div>
      )}

      {/* INICIAR — técnico ou gerência */}
      {os.status==="aprovado_gerente"&&(
        <div style={{...card,borderColor:C.green+"44",background:C.green+"0a"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.green,textTransform:"uppercase",marginBottom:8}}>Orçamento aprovado</div>
          <div style={{fontSize:13,color:C.white,marginBottom:14}}>Confira as ferramentas selecionadas e clique em Iniciar ao sair para o serviço.</div>
          {/* ferramentas selecionadas — confirmação antes de sair */}
          {(os.ferramentasOS||[]).length>0?(
            <ChecklistFerramentas
              ferramentasOS={os.ferramentasOS}
              onChange={v=>onUpdate({...os,ferramentasOS:v,savedAt:new Date().toISOString()})}
              somenteLeitura={false}
              labelTitulo="Confirme as ferramentas que está levando"
            />
          ):(
            <div style={{fontSize:12,color:C.gray,marginBottom:14,padding:"10px 12px",background:C.surface,borderRadius:8}}>
              ℹ Nenhuma ferramenta selecionada para este serviço.
            </div>
          )}
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:8}}>
            <button style={btnPu} onClick={()=>gerarPDF(os)}>📄 Gerar PDF</button>
            <button style={btnP} onClick={iniciar}>🚀 Iniciar processo</button>
          </div>
        </div>
      )}

      {!isGer&&os.status==="devolvida"&&(
        <div style={{...card,borderColor:C.red+"44",background:C.red+"11"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.red,textTransform:"uppercase",marginBottom:8}}>OS devolvida pelo gerente</div>
          <div style={{fontSize:13,color:C.white}}>Revise as informações e salve novamente.</div>
        </div>
      )}

      {/* REVISÃO GERÊNCIA — para OS antigas que ainda usam aguardando_conclusao */}
      {isGer&&os.status==="aguardando_conclusao"&&(
        <div style={{...card,borderColor:C.purple+"44",background:C.purple+"11"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.purple,textTransform:"uppercase",marginBottom:12}}>Revisão de conclusão</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button style={btnG} onClick={()=>onUpdate({...os,status:"concluida",savedAt:new Date().toISOString()})}>✓ Confirmar conclusão</button>
            <button style={btnR} onClick={()=>onUpdate({...os,status:"devolvida",savedAt:new Date().toISOString()})}>↩ Devolver</button>
          </div>
        </div>
      )}

      {/* BOTÃO ABRIR GARANTIA — gerência, OS concluída */}
      {isGer&&os.status==="concluida"&&(
        <div style={{...card,borderColor:C.teal+"44",background:C.teal+"11"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.teal,textTransform:"uppercase",marginBottom:8}}>Reabrir em garantia</div>
          <div style={{fontSize:13,color:C.white,marginBottom:14}}>Abre a OS para que o técnico registre os trechos de atendimento em garantia. O custo extra de MO será calculado separadamente.</div>
          <button style={btnT} onClick={abrirGarantia}>🔧 Abrir atendimento em garantia</button>
        </div>
      )}

      {/* técnico pode complementar execução após concluir */}
      {!isGer&&os.status==="concluida"&&!os.exec&&(
        <div style={{...card,borderColor:C.amber+"44",background:C.amber+"0a"}}>
          <div style={{fontSize:13,color:C.white,marginBottom:12}}>💡 Deseja adicionar o diagnóstico e descrição do que foi executado?</div>
          <button style={btnP} onClick={onEdit}>✏ Preencher execução</button>
        </div>
      )}



      {isGer&&["aprovado_gerente","em_andamento","aguardando_conclusao","concluida","em_garantia"].includes(os.status)&&(
        <div style={{textAlign:"right",marginBottom:16}}>
          <button style={btnPu} onClick={()=>gerarPDF(os)}>📄 Gerar PDF</button>
        </div>
      )}

      <div style={{display:"flex",gap:10,justifyContent:"flex-end",paddingBottom:32,flexWrap:"wrap"}}>
        <button style={btnS} onClick={onBack}>← Voltar</button>
        {(isGer||(isHoje(os.criadoEm)&&!["concluida","cancelada"].includes(os.status)))&&(
          <button style={btnP} onClick={onEdit}>✏ Editar OS</button>
        )}
        {isAdmin&&onDelete&&(
          <button style={btnR} onClick={()=>{if(window.confirm("Excluir a OS "+os.numero+"? Esta ação não pode ser desfeita."))onDelete(os.numero);}}>
            🗑 Excluir OS
          </button>
        )}
      </div>
    </div>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════
// HISTÓRICO
// ════════════════════════════════════════════════════════════════════════
function Historico({lista,usuario,onSelect}){
  const[q,setQ]=useState("");const[sf,setSf]=useState("todos");
  const isGer=usuario.role==="gerencia"||usuario.role==="admin";
  const base=isGer?lista:lista.filter(o=>o.criadoPor===usuario.id||o.tecnicoAtribuido===usuario.id||(o.tecnicosAdicionais||[]).includes(usuario.id));
  const ORDEM_STATUS={em_andamento:0,aprovado_gerente:1,orcamento:2,em_garantia:3,concluida:4,devolvida:5,cancelada:6};
  const fil=base.filter(o=>{
    const t=(o.numero+(o.nome||"")+(o.tipo||"")).toLowerCase();
    return t.includes(q.toLowerCase())&&(sf==="todos"||o.status===sf);
  }).sort((a,b)=>{
    const oa=ORDEM_STATUS[a.status]??9;
    const ob=ORDEM_STATUS[b.status]??9;
    if(oa!==ob)return oa-ob;
    return (b.data||"").localeCompare(a.data||"");
  });
  const STATUS_BG={
    orcamento:{bg:C.amber+"33",color:C.amber,label:"Orçamento",rowBg:"transparent"},
    aprovado_gerente:{bg:C.green+"33",color:C.green,label:"Aprovado",rowBg:"#E8F5E9"},
    em_andamento:{bg:C.steel+"33",color:C.steel,label:"Em andamento",rowBg:"#E3F2FD"},
    aguardando_conclusao:{bg:C.red+"33",color:C.red,label:"Aguard. aprovação",rowBg:"transparent"},
    concluida:{bg:C.green+"33",color:C.green,label:"Concluída",rowBg:"transparent"},
    cancelada:{bg:C.red+"22",color:C.red,label:"Cancelada",rowBg:"#FFEBEE"},
    devolvida:{bg:C.red+"22",color:C.red,label:"Devolvida",rowBg:"transparent"},
    em_garantia:{bg:C.teal+"33",color:C.teal,label:"Em garantia",rowBg:"transparent"},
  };
  return(
    <div>
      <div style={card}><div style={row}>
        <input style={{...inp,flex:2}} placeholder="🔍  Buscar..." value={q} onChange={e=>setQ(e.target.value)}/>
        <select style={{...inp,flex:1}} value={sf} onChange={e=>setSf(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="orcamento">Orçamento</option>
          <option value="aprovado_gerente">Aprovados</option>
          <option value="em_andamento">Em andamento</option>
          <option value="aguardando_conclusao">Aguard. aprovação</option>
          <option value="concluida">Concluídas</option>
          <option value="em_garantia">Em garantia</option>
          <option value="devolvida">Devolvidas</option>
          <option value="cancelada">Canceladas</option>
        </select>
      </div></div>
      {fil.length===0?(
        <div style={{...card,textAlign:"center",padding:"40px 20px",color:C.gray}}><div style={{fontSize:36,marginBottom:8}}>📋</div>Nenhuma OS encontrada</div>
      ):(
        <div style={card}>
          {fil.map((os,idx)=>{
            const st=STATUS_BG[os.status]||{bg:C.gray+"22",color:C.gray,label:os.status};
            const mc=os.margemPct||0;const mc2=mc>30?C.green:mc>15?C.amber:C.red;
            const temGar=(os.garantias||[]).length>0;
            return(
              <div key={os.numero} onClick={()=>onSelect(os)}
                style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 12px",borderBottom:idx<fil.length-1?`1px solid ${C.navyLight}`:"none",cursor:"pointer",gap:12,flexWrap:"wrap",background:st.rowBg||"transparent",borderRadius:idx===0?"8px 8px 0 0":idx===fil.length-1?"0 0 8px 8px":"0"}}
                onMouseEnter={e=>e.currentTarget.style.filter='brightness(0.96)'}
                onMouseLeave={e=>e.currentTarget.style.filter='none'}>
                <div style={{flex:1,minWidth:120}}>
                  <div style={{fontFamily:"monospace",fontSize:12,color:C.amber,marginBottom:2}}>{os.numero}</div>
                  <div style={{fontWeight:600,fontSize:14}}>{os.nome||"—"}</div>
                  <div style={{fontSize:12,color:C.gray}}>{os.tipo}{temGar&&<span style={{marginLeft:8,color:C.teal}}>⚙ garantia</span>}</div>
                </div>
                <div style={{fontSize:12,color:C.gray,whiteSpace:"nowrap"}}>{fmtD(os.data)}</div>
                <div style={{fontFamily:"monospace",fontSize:14,whiteSpace:"nowrap"}}>{fmtR(os.valorTotal||0)}</div>
                {isGer&&<div style={{fontFamily:"monospace",fontSize:13,color:mc2,whiteSpace:"nowrap"}}>{mc?mc.toFixed(1)+"%":"—"}</div>}
                <div style={{background:st.bg,color:st.color,border:"1.5px solid "+st.color,borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:700,whiteSpace:"nowrap",minWidth:110,textAlign:"center"}}>{st.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// RELATÓRIOS
// ════════════════════════════════════════════════════════════════════════
function Relatorios({lista,usuarios}){
  // ── filtros de exportação ──
  const[filtroStatus,setFiltroStatus]=useState("todos");
  const[dataIni,setDataIni]=useState("");
  const[dataFim,setDataFim]=useState("");
  const[exportando,setExportando]=useState(false);
  const[exportMsg,setExportMsg]=useState("");

  const ok=lista.filter(o=>o.status==="concluida"||o.status==="em_garantia");
  const rec=ok.reduce((a,o)=>a+(o.valorTotal||0),0);
  const marg=ok.reduce((a,o)=>a+(o.margem||0),0);
  const mMedia=ok.length>0?ok.reduce((a,o)=>a+(o.margemPct||0),0)/ok.length:0;
  const ticket=ok.length>0?rec/ok.length:0;
  const hGarTotal=ok.reduce((a,o)=>a+somaHoras(o.garantias||[]),0);
  const porTipo={};
  ok.forEach(o=>{const k=o.tipo||"Outros";if(!porTipo[k])porTipo[k]={n:0,r:0,m:0};porTipo[k].n++;porTipo[k].r+=o.valorTotal||0;porTipo[k].m+=o.margem||0;});
  const rank=Object.entries(porTipo).map(([k,v])=>({k,...v,pct:v.r>0?(v.m/v.r)*100:0})).sort((a,b)=>b.r-a.r);

  // ── lógica de filtro para exportação ──
  function filtrarParaExport(){
    return lista.filter(o=>{
      if(filtroStatus!=="todos"&&o.status!==filtroStatus)return false;
      if(dataIni&&o.data<dataIni)return false;
      if(dataFim&&o.data>dataFim)return false;
      return true;
    });
  }

  // ── nome do técnico ──
  function nomeUsuario(id){
    const u=(usuarios||[]).find(x=>x.id===id);
    return u?u.nome:id||"—";
  }

  // ── geração do Excel via CSV+BOM (abre direto no Excel sem lib externa) ──
  function exportarExcel(){
    setExportando(true);
    const dados=filtrarParaExport();
    if(dados.length===0){setExportMsg("Nenhuma OS encontrada com os filtros selecionados.");setExportando(false);return;}

    const cols=[
      "Nº OS","Data","Status","Cliente","Telefone","Endereço","Tipo de Serviço",
      "Técnico","H. Estimadas","H. Reais (deslocamentos)","H. Garantia",
      "Qtd Deslocamentos","Data 1ª Saída","Data Último Retorno",
      "Materiais (R$)","Valor Cobrado (R$)","Margem (R$)","Margem (%)",
      "Assinatura Cliente","Ferramentas Levadas","Feedback Enviado","Observações Execução"
    ];

    const Q=String.fromCharCode(34);
    const esc=v=>{
      if(v==null||v==="")return "";
      const s=String(v).split(Q).join(Q+Q);
      return s.includes(",")||s.includes("\n")||s.includes(Q)?Q+s+Q:s;
    };

    const linhas=dados.map(o=>{
      const desl=o.deslocamentos||[];
      const gars=o.garantias||[];
      const hDesl=parseFloat(somaHoras(desl).toFixed(2));
      const hGar=parseFloat(somaHoras(gars).toFixed(2));
      const saidas=desl.filter(d=>d.saida).sort((a,b)=>new Date(a.saida)-new Date(b.saida));
      const retornos=desl.filter(d=>d.retorno).sort((a,b)=>new Date(b.retorno)-new Date(a.retorno));
      const prSaida=saidas.length>0?fmtDH(saidas[0].saida):"";
      const ultRet=retornos.length>0?fmtDH(retornos[0].retorno):"";
      const ferrs=(o.ferramentasOS||[]).map(f=>"#"+String(f.fid).padStart(2,"0")+" "+f.nome).join("; ");
      const totMat=(o.mats||[]).reduce((a,m)=>a+(parseFloat(m.q)||0)*(parseFloat(m.v)||0),0);
      return[
        o.numero,
        o.data?new Date(o.data+"T12:00:00").toLocaleDateString("pt-BR"):"",
        STATUS_LABEL[o.status]||o.status,
        o.nome||"",
        o.tel||"",
        o.end||"",
        o.tipo||"",
        nomeUsuario(o.criadoPor),
        o.hEst||"",
        hDesl||"",
        hGar||"",
        desl.length,
        prSaida,
        ultRet,
        totMat.toFixed(2).replace(".",","),
        (parseFloat(o.valorTotal)||0).toFixed(2).replace(".",","),
        (parseFloat(o.margem)||0).toFixed(2).replace(".",","),
        (parseFloat(o.margemPct)||0).toFixed(1).replace(".",",")+"%",
        (o.assinatura&&o.assinatura.nome)||( (o.assinatura&&o.assinatura.img)?"Sim":"Não"),
        ferrs||"—",
        o.feedbackEnviadoEm?"Sim":"Não",
        o.obsExec||"",
      ].map(esc).join(",");
    });

    const bom="\uFEFF"; // BOM para Excel reconhecer UTF-8
    const csv=bom+cols.join(",")+"\n"+linhas.join("\n");
    const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    const dtHoje=new Date().toLocaleDateString("pt-BR").replace(/\//g,"-");
    a.href=url;
    a.download=`polar-os-${dtHoje}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setExportMsg(`✓ ${dados.length} OS exportadas com sucesso!`);
    setExportando(false);
    setTimeout(()=>setExportMsg(""),4000);
  }

  function Stat({label,value,color,sub}){
    return(
      <div style={{background:C.surface,borderRadius:10,padding:16,borderLeft:"3px solid "+(color||C.amber)}}>
        <div style={{fontSize:10,color:C.gray,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>{label}</div>
        <div style={{fontSize:18,fontWeight:700,color:color||C.white,fontFamily:"monospace"}}>{value}</div>
        {sub&&<div style={{fontSize:11,color:C.gray,marginTop:4}}>{sub}</div>}
      </div>
    );
  }

  const STATUS_OPTS=[
    {v:"todos",l:"Todos os status"},
    {v:"orcamento",l:"Orçamento"},
    {v:"aprovado_gerente",l:"Aprovado"},
    {v:"em_andamento",l:"Em andamento"},
    {v:"concluida",l:"Concluída"},
    {v:"em_garantia",l:"Em garantia"},
    {v:"cancelada",l:"Cancelada"},
    {v:"devolvida",l:"Devolvida"},
  ];

  const previewCount=filtrarParaExport().length;

  return(
    <div>
      {/* KPIs */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12,marginBottom:20}}>
        <Stat label="OS concluídas" value={ok.length} color={C.amber}/>
        <Stat label="Receita total" value={fmtR(rec)} color={C.steel}/>
        <Stat label="Margem média" value={mMedia.toFixed(1)+"%"} color={mMedia>30?C.green:mMedia>15?C.amber:C.red}/>
        <Stat label="Margem bruta R$" value={fmtR(marg)} color={C.green}/>
        <Stat label="Ticket médio" value={fmtR(ticket)}/>
        {hGarTotal>0&&<Stat label="Horas em garantia" value={hGarTotal.toFixed(1)+"h"} color={C.teal} sub="custo extra de MO"/>}
      </div>

      {/* ranking por tipo */}
      {rank.length>0&&(
        <div style={card}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.amber,textTransform:"uppercase",marginBottom:16}}>Por tipo de serviço</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 40px 100px 70px 100px",gap:8,padding:"8px 12px",background:C.navyLight,borderRadius:"8px 8px 0 0",fontSize:10,fontWeight:700,letterSpacing:1.5,color:C.gray,textTransform:"uppercase"}}>
            <div>Serviço</div><div>Qtd</div><div>Receita</div><div>Margem%</div><div>Margem R$</div>
          </div>
          {rank.map((s,i)=>{
            const mc=s.pct>30?C.green:s.pct>15?C.amber:C.red;
            return(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 40px 100px 70px 100px",gap:8,padding:"12px",borderBottom:`1px solid ${C.navyLight}`,fontSize:13,alignItems:"center"}}>
                <div>{s.k}</div><div style={{color:C.gray}}>{s.n}</div>
                <div style={{fontFamily:"monospace"}}>{fmtR(s.r)}</div>
                <div style={{fontFamily:"monospace",color:mc}}>{s.pct.toFixed(1)}%</div>
                <div style={{fontFamily:"monospace",color:C.green}}>{fmtR(s.m)}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* EXPORTAÇÃO EXCEL */}
      <div style={{...card,borderColor:C.green+"44"}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:2,color:C.green,textTransform:"uppercase",marginBottom:16}}>📊 Exportar para Excel</div>

        <div style={row}>
          <div style={{flex:1,minWidth:140}}>
            <label style={lbl}>Status</label>
            <select style={inp} value={filtroStatus} onChange={e=>setFiltroStatus(e.target.value)}>
              {STATUS_OPTS.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
            </select>
          </div>
          <div style={{flex:1,minWidth:130}}>
            <label style={lbl}>Data inicial</label>
            <input style={inp} type="date" value={dataIni} onChange={e=>setDataIni(e.target.value)}/>
          </div>
          <div style={{flex:1,minWidth:130}}>
            <label style={lbl}>Data final</label>
            <input style={inp} type="date" value={dataFim} onChange={e=>setDataFim(e.target.value)}/>
          </div>
        </div>

        {/* preview das colunas */}
        <div style={{background:C.surface,borderRadius:8,padding:"10px 14px",marginBottom:14,fontSize:12,color:C.gray,lineHeight:1.8}}>
          <span style={{color:C.white,fontWeight:600}}>Colunas incluídas: </span>
          Nº OS · Data · Status · Cliente · Telefone · Endereço · Tipo de Serviço · Técnico · H. Estimadas · H. Reais · H. Garantia · Qtd Deslocamentos · 1ª Saída · Último Retorno · Materiais (R$) · Valor Cobrado (R$) · Margem (R$) · Margem (%) · Assinatura · Ferramentas · Feedback · Obs. Execução
        </div>

        <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
          <button style={{...btnP,background:C.green,opacity:previewCount===0?0.4:1,cursor:previewCount===0?"not-allowed":"pointer"}}
            onClick={previewCount>0?exportarExcel:undefined}
            disabled={exportando}>
            {exportando?"⏳ Gerando...":"⬇ Baixar Excel (.csv)"}
          </button>
          <span style={{fontSize:13,color:C.gray}}>
            {previewCount>0?<><strong style={{color:C.white}}>{previewCount}</strong> OS no filtro atual</>:"Nenhuma OS no filtro"}
          </span>
          {exportMsg&&<span style={{fontSize:13,color:C.green,fontWeight:600}}>{exportMsg}</span>}
        </div>
        <div style={{fontSize:11,color:C.gray,marginTop:10}}>💡 O arquivo .csv abre direto no Excel, LibreOffice e Google Sheets. No Excel, use <em>Dados → De Texto/CSV</em> se necessário.</div>
      </div>

      {ok.length===0&&(
        <div style={{...card,textAlign:"center",padding:"40px 20px",color:C.gray}}>
          <div style={{fontSize:36,marginBottom:8}}>📊</div>
          Os relatórios aparecerão aqui conforme as OS forem concluídas.
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// APP
// ════════════════════════════════════════════════════════════════════════
export default function App(){
  const[usuario,setUsuario]=useState(null);
  const[tab,setTab]=useState("os");
  const[view,setView]=useState("list");
  const[lista,setLista]=useState([]);
  const[cur,setCur]=useState(null);
  const[editMode,setEditMode]=useState(false);
  const[cfg,setCfg]=useState(CONFIG_PADRAO);
  const[usuarios,setUsuarios]=useState(USUARIOS_PADRAO);
  useEffect(()=>{
    storageGet("polar_os").then(d=>{if(d)setLista(d);});
    // Sessão não persistida — login obrigatório a cada acesso
    storageGet("polar_cfg").then(c=>{if(c)setCfg(c);});
    storageGet("polar_usuarios").then(u=>{if(u)setUsuarios(u);});
    storageGet("polar_cfg").then(c=>{if(c)setCfg(c);});
  },[]);
  const [syncErr,setSyncErr]=useState(false);
  async function saveList(l){
    setLista(l);
    const ok=await storageSet("polar_os",l);
    if(ok===false)setSyncErr(true);
    else setSyncErr(false);
  }
  async function saveCfg(c){setCfg(c);await storageSet("polar_cfg",c);}
  function handleLogin(u){setUsuario(u);}
  function handleLogout(){setUsuario(null);setView("list");setTab("os");}
  function handleSave(os){const idx=lista.findIndex(x=>x.numero===os.numero);const nl=idx>=0?lista.map((x,i)=>i===idx?os:x):[os,...lista];saveList(nl);setCur(os);setView("detail");setTab("os");}
  function handleUpdate(os){const nl=lista.map(x=>x.numero===os.numero?os:x);saveList(nl);setCur(os);}
  function handleDelete(numero){const nl=lista.filter(x=>x.numero!==numero);saveList(nl);setCur(null);setView("list");}
  const isGer=(usuario&&usuario.role)==="gerencia"||(usuario&&usuario.role)==="admin";
  const isAdmin=(usuario&&usuario.role)==="admin";
  const pendentes=lista.filter(o=>["orcamento","aguardando_conclusao"].includes(o.status)).length;
  if(!usuario)return <Login onLogin={handleLogin}/>;
  function NavBtn({id,label,badge}){
    const active=tab===id&&view==="list";
    return(<button style={{position:"relative",padding:"6px 14px",borderRadius:6,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,background:active?C.amber:"transparent",color:active?"#fff":C.gray}} onClick={()=>{setTab(id);setView("list");}}>
      {label}{badge>0&&<span style={{position:"absolute",top:-2,right:-2,background:C.red,color:C.white,borderRadius:10,fontSize:10,fontWeight:700,padding:"1px 5px",minWidth:16,textAlign:"center"}}>{badge}</span>}
    </button>);
  }
  const roleLabel={admin:"Admin",gerencia:"Gerência",tecnico:"Técnico"};
  return(
    <div style={{minHeight:"100vh",background:"#F0F0EE",fontFamily:"'DM Sans','Segoe UI',sans-serif",color:"#1A1A1A",overflowX:"hidden"}}>
      <div style={{background:C.navyMid,borderBottom:"3px solid "+C.amber,padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60,position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO_B64} alt="Logo" style={{width:40,height:40,objectFit:"contain",flexShrink:0,borderRadius:6}}/>
          <div>
            <div style={{fontSize:15,fontWeight:700,letterSpacing:1,color:C.white}}>SERVIÇOS</div>
            <div style={{fontSize:10,color:C.gray,letterSpacing:1,textTransform:"uppercase"}}>{usuario.nome} · {roleLabel[usuario.role]||usuario.role}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:4,alignItems:"center",flexWrap:"wrap"}}>
          {view==="list"&&<>
            {!isAdmin&&<NavBtn id="os" label="OS" badge={isGer?pendentes:0}/>}
            {isGer&&!isAdmin&&<NavBtn id="rel" label="Relatórios"/>}
            {isGer&&<NavBtn id="usuarios" label="Usuários"/>}
            {isGer&&<NavBtn id="ferramentas" label="🔧 Ferramentas"/>}
            {isAdmin&&<NavBtn id="config" label="Configurações"/>}
            {isAdmin&&<NavBtn id="ferramentas" label="🔧 Ferramentas"/>}
            {!isAdmin&&<button style={{...btnP,padding:"6px 14px",fontSize:13}} onClick={()=>{setCur(null);setEditMode(false);setView("form");setTab("os");}}>+ Nova OS</button>}
          </>}
          {view!=="list"&&<button style={btnS} onClick={()=>setView(view==="detail"?"list":(cur?"detail":"list"))}>← Voltar</button>}
          <button style={{...btnS,padding:"6px 10px",fontSize:12}} onClick={handleLogout}>Sair</button>
        </div>
      </div>
      <div style={{maxWidth:900,margin:"0 auto",padding:"24px 16px"}}>
        {syncErr&&(
          <div style={{background:"#B71C1C",color:"#FFFFFF",padding:"10px 16px",borderRadius:8,marginBottom:12,fontSize:13,fontWeight:600,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            ⚠ Erro ao sincronizar com o servidor. Verifique sua conexão e tente salvar novamente.
            <button style={{background:"transparent",border:"1px solid #fff",color:"#fff",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12}} onClick={()=>setSyncErr(false)}>✕</button>
          </div>
        )}
        {view==="list"&&tab==="os"&&isGer&&!isAdmin&&pendentes>0&&(
          <div style={{...card,borderColor:C.red+"55",background:C.red+"11",marginBottom:12}}>
            <div style={{fontSize:13,color:C.red,fontWeight:700}}>🔴 {pendentes} OS aguardando sua ação</div>
          </div>
        )}
        {view==="form"&&<Form init={editMode?cur:null} usuario={usuario} cfg={cfg} usuarios={usuarios} onSave={handleSave} onCancel={()=>setView(cur?"detail":"list")}/>}
        {view==="detail"&&cur&&<Detalhe os={cur} usuario={usuario} cfg={cfg} usuarios={usuarios} onBack={()=>setView("list")} onEdit={()=>{setEditMode(true);setView("form");}} onUpdate={handleUpdate} onDelete={handleDelete}/>}
        {view==="list"&&tab==="os"&&!isAdmin&&(
          lista.filter(o=>isGer||o.criadoPor===usuario.id||o.tecnicoAtribuido===usuario.id||(o.tecnicosAdicionais||[]).includes(usuario.id)).length===0?(
            <div style={{...card,textAlign:"center",padding:"50px 20px"}}>
              <div style={{fontSize:40,marginBottom:12}}>🔧</div>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Nenhuma OS criada</div>
              <div style={{color:C.gray,marginBottom:20}}>Crie a primeira ordem de serviço</div>
              <button style={btnP} onClick={()=>{setCur(null);setEditMode(false);setView("form");}}>+ Criar primeira OS</button>
            </div>
          ):<Historico lista={lista} usuario={usuario} onSelect={o=>{setCur(o);setView("detail");}}/>
        )}
        {view==="list"&&tab==="rel"&&isGer&&!isAdmin&&<Relatorios lista={lista} usuarios={usuarios}/>}
        {view==="list"&&tab==="usuarios"&&isGer&&<GestaoUsuarios onBack={()=>setView("list")}/>}
        {view==="list"&&tab==="ferramentas"&&isGer&&<GestaoFerramentas onBack={()=>setView("list")}/>}
        {view==="list"&&tab==="config"&&isAdmin&&<Configuracoes cfg={cfg} onSave={saveCfg}/>}
      </div>
    </div>
  );
}

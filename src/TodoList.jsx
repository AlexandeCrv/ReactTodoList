import React, { useState, useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import "./TodoList.css";

// imgs e gifs \\

import li from "./assets/li.png";
import berseker32 from "./assets/berseker32.png";
import bersekg from "./assets/bersek.png";
import tanker32 from "./assets/tanker32.png";
import tankerg from "./assets/tankerg.png";
import paladin32 from "./assets/paladin32.png";
import mago32 from "./assets/mano32.png";
import magog from "./assets/wizardg.png";
import healer32 from "./assets/healer32.png";
import palading from "./assets/palading.png";
import healerg from "./assets/healerg.png";
import vida from "./assets/vida.png";
import armor from "./assets/armor.png";
import up from "./assets/up.png";
import mobilit from "./assets/mobilit.png";
import danofisico from "./assets/danofisico.png";
import danobruto from "./assets/danobruto.png";
import danomagico from "./assets/magia.png";
import hibrido from "./assets/hibrido.png";

function TodoList({ nomeb, nomet, nomep, nomem, nomeh }) {
  const [bersekerTasks, setBersekerTasks] = useState([]);
  const [tankerTasks, setTankerTasks] = useState([]);
  const [paladinTasks, setPaladinTasks] = useState([]);
  const [wizardTasks, setWizardTasks] = useState([]);
  const [healerTasks, setHealerTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Healer");

  const novatask = () => {
    switch (selectedCategory) {
      case "Berseker":
        setBersekerTasks((prevTasks) => [...prevTasks, currentTask]);
        break;
      case "Tanker":
        setTankerTasks((prevTasks) => [...prevTasks, currentTask]);
        break;
      case "Paladin":
        setPaladinTasks((prevTasks) => [...prevTasks, currentTask]);
        break;
      case "Wizard":
        setWizardTasks((prevTasks) => [...prevTasks, currentTask]);
        break;
      case "Healer":
        setHealerTasks((prevTasks) => [...prevTasks, currentTask]);
        break;
      default:
        console.log("Categoria não reconhecida");
    }

    // Limpa o campo de entrada
    setCurrentTask("");
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setBersekerTasks(parsedTasks.bersekerTasks || []);
      setTankerTasks(parsedTasks.tankerTasks || []);
      setPaladinTasks(parsedTasks.paladinTasks || []);
      setWizardTasks(parsedTasks.wizardTasks || []);
      setHealerTasks(parsedTasks.healerTasks || []);
    }
  }, []);

  useEffect(() => {
    const tasksToSave = {
      bersekerTasks,
      tankerTasks,
      paladinTasks,
      wizardTasks,
      healerTasks,
    };
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  }, [bersekerTasks, tankerTasks, paladinTasks, wizardTasks, healerTasks]);

  // Berseker
  const [ModalIsOpenb, setIsOpenb] = useState(false);

  function OpenModalb() {
    setIsOpenb(true);
  }

  function CloseModalb() {
    setIsOpenb(false);
  }

  // Tank
  const [ModalIsOpent, setIsOpent] = useState(false);
  function OpenModalt() {
    setIsOpent(true);
  }
  function CloseModalt() {
    setIsOpent(false);
  }

  // Paladin
  const [ModalIsOpenp, setIsOpenp] = useState(false);
  function OpenModalp() {
    setIsOpenp(true);
  }
  function CloseModalp() {
    setIsOpenp(false);
  }

  // WIZARD
  const [ModalIsOpenw, setIsOpenw] = useState(false);
  function OpenModalw() {
    setIsOpenw(true);
  }
  function CloseModalw() {
    setIsOpenw(false);
  }

  // Healr
  const [ModalIsOpenh, setIsOpenh] = useState(false);
  function OpenModalh() {
    setIsOpenh(true);
  }
  function CloseModalh() {
    setIsOpenh(false);
  }
  return (
    <div>
      <h1>Quais as quests da party hoje?</h1>
      <div className="form">
        <div>
          <img className="li" src={li} alt="" />
        </div>
        <input
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          type="text"
          placeholder="Coloca uma tarefa ai"
        />
        <button onClick={novatask} type="submit" className="add">
          Add
        </button>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="Berseker">Berseker</option>
          <option value="Tanker">Tanker</option>
          <option value="Paladin">Paladin</option>
          <option value="Wizard">Wizard</option>
          <option value="Healer">Healer</option>
        </select>
        <div>
          <img className="li" src={li} alt="" />
        </div>
      </div>
      a
      <div className="lista-tarefas">
        <div className="primeirasclasses">
          <div className="ancorab">
            <p>
              {" "}
              <img className="bers" src={berseker32} />
              {nomeb}{" "}
            </p>
            <img className="border" src={bersekg} />
            <button className="geral" onClick={OpenModalb}>
              {" "}
              Status{" "}
            </button>
            <div className="bibiu">
              {bersekerTasks.map((task, index) => (
                <strong key={index}>{task}</strong>
              ))}
            </div>
            <Modal
              className="md"
              isOpen={ModalIsOpenb}
              onRequestClose={CloseModalb}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="topo">
                <div>
                  <button className="btnx" onClick={CloseModalb}>
                    X
                  </button>
                </div>

                <div>
                  <img className="imgtop" src={berseker32} alt="" />
                </div>
              </div>
              <hr />
              <h1 className="modalh1">Status {nomeb}</h1>
              <div className="coit">
                <div className="img">
                  <img className=" gifb" src={bersekg} alt="" />
                  <p>
                    Um guerreiro formidável quando se trata de dano físico.{" "}
                  </p>
                </div>
                <div className="descriçoes">
                  <div className="a">
                    <p>
                      {" "}
                      <img src={vida} alt="" /> Heath :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraBH">800 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={armor} alt="" /> Armor :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraBA">
                        <div className="qf10">450 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={danofisico} alt="" /> Dano físico :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraBD">800 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={up} alt="" /> Suport :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraBS">
                        <div className="qf0">0 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={mobilit} alt="" /> Mobilit :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraBM">
                        <div className="qf10">300 / 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>

          <div className="ancorab">
            <p>
              {" "}
              <img src={tanker32} />
              {nomet}
            </p>
            <img className="border" src={tankerg} />
            <button className="geral" onClick={OpenModalt}>
              {" "}
              Status{" "}
            </button>
            <div className="bibiu">
              {tankerTasks.map((task, index) => (
                <strong key={index}>{task}</strong>
              ))}
            </div>
            <Modal
              className="md"
              isOpen={ModalIsOpent}
              onRequestClose={CloseModalt}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="topo">
                <div>
                  <button className="btnx" onClick={CloseModalt}>
                    X
                  </button>
                </div>

                <div>
                  <img className="imgtop" src={tanker32} alt="" />
                </div>
              </div>
              <hr />
              <h1 className="modalh1">Status {nomet}</h1>
              <div className="coit">
                <div className="img">
                  <img className=" gifb" src={tankerg} alt="" />
                  <p>
                    Literalmente um Tank de Guerra humano <br /> TANKA MUITO!{" "}
                  </p>
                </div>
                <div className="descriçoes">
                  <div className="a">
                    <p>
                      {" "}
                      <img src={vida} alt="" /> Heath :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraTH">900 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={armor} alt="" /> Armor :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraTA">900 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={danobruto} alt="" /> Dano Bruto :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraTD">
                        <div className="qf10">100 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={up} alt="" /> Suport :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraTS">
                        <div className="qf10">400 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={mobilit} alt="" /> Mobilit :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraTM">
                        <div className="qf10">100 / 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div className="ancorab">
            <p>
              {" "}
              <img src={paladin32} />
              {nomep}
            </p>
            <img className="border" src={palading} />
            <button className="geral" onClick={OpenModalp}>
              {" "}
              Status{" "}
            </button>
            <div className="bibiu">
              {paladinTasks.map((task, index) => (
                <strong key={index}>{task}</strong>
              ))}
            </div>
            <Modal
              className="md"
              isOpen={ModalIsOpenp}
              onRequestClose={CloseModalp}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="topo">
                <div>
                  <button className="btnx" onClick={CloseModalp}>
                    X
                  </button>
                </div>

                <div>
                  <img className="imgtop" src={paladin32} alt="" />
                </div>
              </div>
              <hr />
              <h1 className="modalh1">Status {nomep} </h1>
              <div className="coit">
                <div className="img">
                  <img className=" gifb" src={palading} alt="" />
                  <p>
                    Focado mais em habilidades de suporte e tankar dano, <br />{" "}
                    aplica dano magico e Fisico{" "}
                  </p>
                </div>
                <div className="descriçoes">
                  <div className="a">
                    <p>
                      {" "}
                      <img src={vida} alt="" /> Heath :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraPH">650 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={armor} alt="" /> Armor :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraPA">530 / 1000</div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={hibrido} alt="" /> Dano Hibrido :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraPHI">
                        <div className="qf10">500 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={up} alt="" /> Suport :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraPS">
                        <div className="qf10">580 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={mobilit} alt="" /> Mobilit :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraPM">
                        <div className="qf10">200 / 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div className="ancorab">
            <p>
              <img src={mago32} />
              {nomem}
            </p>
            <img className="border" src={magog} />
            <button className="geral" onClick={OpenModalw}>
              {" "}
              Status{" "}
            </button>
            <div className="bibiu">
              {wizardTasks.map((task, index) => (
                <strong key={index}>{task} </strong>
              ))}
            </div>

            <Modal
              className="md"
              isOpen={ModalIsOpenw}
              onRequestClose={CloseModalw}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="topo">
                <div>
                  <button className="btnx" onClick={CloseModalw}>
                    X
                  </button>
                </div>

                <div>
                  <img className="imgtop" src={mago32} alt="" />
                </div>
              </div>
              <hr />
              <h1 className="modalh1">Status {nomem}</h1>
              <div className="coit">
                <div className="img">
                  <img className=" gifb" src={magog} alt="" />
                  <p>
                    Brutalidade em dano magico e com uma mobilidade moderada{" "}
                  </p>
                </div>
                <div className="descriçoes">
                  <div className="a">
                    <p>
                      {" "}
                      <img src={vida} alt="" /> Heath :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraWH">
                        <div className="qf10">380 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={armor} alt="" /> Armor :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraWA">
                        <div className="qf10">230 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={danomagico} alt="" /> Dano Magico :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraWM">
                        <div className="qf10">900 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={up} alt="" /> Suport :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraWS">
                        <div className="qf10">180 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={mobilit} alt="" /> Mobilit :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraWM">
                        <div className="qf10">600 / 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div className="ancorab">
            <p>
              <img src={healer32} />
              {nomeh}{" "}
            </p>
            <img className="border" src={healerg} />
            <button className="geral" onClick={OpenModalh}>
              {" "}
              Status{" "}
            </button>
            <div className="bibiu">
              {healerTasks.map((task, index) => (
                <strong key={index}>{task}</strong>
              ))}
            </div>

            <Modal
              className="md"
              isOpen={ModalIsOpenh}
              onRequestClose={CloseModalh}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="topo">
                <div>
                  <button className="btnx" onClick={CloseModalh}>
                    X
                  </button>
                </div>

                <div>
                  <img className="imgtop" src={healer32} alt="" />
                </div>
              </div>
              <hr />
              <h1 className="modalh1">Status {nomeh}</h1>
              <div className="coit">
                <div className="img">
                  <img className=" gifb" src={healerg} alt="" />
                  <p>
                    Especialidade em skils de cura e buff de status <br />
                    essencial pra qualquer Pt{" "}
                  </p>
                </div>
                <div className="descriçoes">
                  <div className="a">
                    <p>
                      {" "}
                      <img src={vida} alt="" /> Heath :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraHH">
                        <div className="qf10">450 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={armor} alt="" /> Armor :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraHA">
                        <div className="qf10">290 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={danomagico} alt="" /> Dano Magico :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraHM">
                        <div className="qf10">250 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={up} alt="" /> Suport :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraHS">
                        <div className="qf10">1000 / 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <p>
                      {" "}
                      <img src={mobilit} alt="" /> Mobilit :{" "}
                    </p>
                    <div className="pbarra">
                      <div className="barraHM">
                        <div className="qf10">450 / 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

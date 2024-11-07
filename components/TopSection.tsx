'use client'

import Image from "next/image"
import JoinButton from "@/components/JoinButton"
import ModuleAccordion from "./ModuleAccordion"
import QuestionAccordion from "./QuestionAccordion"



const TopSection = () => {
  
  


  return (
    <section>
      {/* Desktop view */}
      <div className="sm:flex sm:flex-col hidden">
        <div className="bg-[url('assets/images/background-1.png')] bg-cover bg-no-repeat bg-center flex flex-col">
          <div className="mx-48 pt-12 flex flex-col items-center">
            <Image 
              src="assets/images/logo.png"
              width={400}
              height={300}
              alt="logo"
            />
            <p className="text-white font-alexandria font-bold text-8xl mt-12 text-center">Haz de tu Instagram <br />
              el Centro de Atención <br />
              <span className="text-violet-600">del Fitness</span>
            </p>
            <Image 
              src={"assets/images/starting-post.png"}
              width={1000}
              height={500}
              alt="starting-post"
              className="mt-8 w-5/6 max-w-[1600px]"
            
            />
            <JoinButton 
              width={350}
              fontSize={24}
              variant="filled"  
              color="violet"
              size="xl"
              radius="xl"
              checkSize={24}
              checkStroke={3.5}
            />
            

          </div>
          <Image 
              src={"assets/images/transition-line.png"}
              width={500}
              height={500}
              alt="starting-post"
              className="mt-8 w-full"
            
            />

        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col gap-2 pt-36 items-center justify-center px-60">
          <div id='div-1' className="flex mb-32" data-aos="fade-left" aos-duration="1000">
            <div className="text-3xl font-alexandria font-light">
              <p className="text-6xl font-bold">Te <span className="text-violet-600">gustaría</span> ser capaz de que:</p>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿La audiencia <span className="font-bold">te reconozca </span> 
                  como un verdadero referente?
                </p>
                
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿Tu marca personal <span className="font-bold">crezca 
                  de manera exponencial </span> 
                  en Redes Sociales?
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿Tu Instagram se vuelva <span className="font-bold">un imán 
                  de atención</span> para decenas 
                  de miles de personas? </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿Tus contenidos dejen de pasar 
                  desapercibidos y <span className="font-bold">se conviertan en
                  virales?</span>
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿Tus Stories tengan <span className="font-bold">miles y miles
                  de visualizaciones </span> de forma 
                  constante?
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="check"
                />
                <p> 
                  ¿Tus seguidores reacciones, 
                  respondan, comenten, 
                  <span className="font-bold"> te escriban de forma imparable?</span>
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={80}
                  height={80}
                  alt="color-check"
                />
                <p> 
                  ¿El algoritmo <span className="font-bold">premie de una vez 
                  por todas</span> todo lo que compartes?
                </p>
              </div>
            </div>
            <Image 
              src="assets/images/phone.png"
              width={450}
              height={800}
              alt="phone"
              className=" max-w-[600px] max-h-[800px]"
            />
          </div>
          <br />
          <div className="flex flex-col gap-4 items-center font-alexandria font-light text-center text-3xl">
            <div className="flex align-middle">
              <p className="text-4xl font-bold">¿Escéptico?</p>
              <Image 
                src={"assets/icons/emoji.png"}
                width={50}
                height={50}
                alt="thinking-emoji"
              />
            </div>
            
            <p>Normal, nosotros también <i>lo éramos.</i></p>
            
            <p>
              Hasta que descubrimos un <span className="font-bold">Sistema para "Hackear"</span> <br />
              (de forma 100% legal y real) el alcance de Instagram.
            </p>
            
            <p>
              Y para además poder replicar una y otra vez para que todo <br />
              <span className="font-bold">ese alcance extra no vuelva a bajar y se mantenga.</span>
            </p>

          </div>
          <Image 
            src={"assets/images/phrase.png"}
            width={1500}
            height={800}
            alt="phrase"
            className="max-w-[1800px] mt-18"
          />
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center 
        flex flex-col gap-4 py-24 items-center  font-alexandria font-light text-center text-3xl justify-center">
          <p>
            <span className="font-bold">La atención es cada vez menor</span>, o le das a la audiencia <br />
            lo que realmente está buscando, o estás perdido.
          </p>
          <br />
          <p>
            En Mundotrainers llevamos 3 años utilizando estrategias <br />
            probadas y optimizándolas de captación de atención, <br />
            lo que ha hecho <span className="font-bold">crecer +250 cuentas de Instagram <br />
            de entrenadores, nutricionistas, dietistas y apasionados <br />
            del fitness.
            </span>

          </p>
          <br />
          <p>
            Con ello no han logrado solo audiencia y atención, <br />
            <span className="font-bold">sino también ingresos extras gracias a esto.</span>
          </p>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col pt-12 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-alexandria font-bold text-left text-4xl ">
                <span className="text_gradient">INSTAGROWTH</span> es el método <br />
                que te permite lograr todo <br />
                esto y mucho más.

              </p>
              <br />
              <p className="font-alexandria font-bold text-left text-4xl justify-center">
                ¿Cómo funciona Instagrowth?
              </p>
              <br />
              <p className="font-alexandria font-light text-left text-3xl justify-center">
                Instagrowth es una forma de utilizar <br />
                las herramientas de Instagram (posts, <br />
                reels, carruseles, stories, MD's...) <span className="font-bold">para <br />
                generar una conexión profunda con <br />
                la audiencia</span> que te sigue.
              </p>
            </div>
            <Image 
              src={"assets/images/laptop.png"}
              width={600}
              height={600}
              alt="laptop"
            />
          </div>
          <div className="items-center font-alexandria font-light text-left text-3xl w-full max-w-[1150px] mb-48">
            <br />
            <p>
              A través de temas predefinidos y contenidos que la propia audiencia <br />
              te da (aprenderás como hacerlo dentro de Instagrowth), te centras <br />
              en temas <span className="font-bold">que captan la atención y el interés genuino de la gente.</span>
            </p>
            <br />
            <p>
              Cuando lo haces bien, <span className="font-bold">le das a la gente lo que realmente les <br />  
              interesa</span>, generando curiosidad y deseo, se enganchan a tu <br />
              contenido y a lo que tienes que decir.
            </p>
            <br />
            <p>
              Con esto, en consecuencia, <span className="font-bold"> mejoras el comportamiento, aumentas <br />
              las visitas, conectas realmente con tu audiencia y consigues <br />
              más ingresos.</span>
            </p>
          </div>
        
        </div>
        <div className="bg-[url('assets/images/background-3.png')] bg-cover bg-no-repeat bg-center  flex flex-col items-center">
          <Image 
            src={"assets/images/circle.png"}
            width={1500}
            height={800}
            alt="phrase"
            className="inline-block mt-[-180px]"
          />
          <div className="flex flex-col gap-8 font-alexandria font-light text-3xl text-center text-white">
            <p className="text-violet-600 font-bold">¿Has notado que tu alcance cada vez es menor?</p>
            <p>Es normal.</p>
            <p>Es lo que hace el tan mencionado (y poco entendido) <br />
            <span className="font-bold">ALGORITMO de Instagram.</span></p>
            <p>No es tu culpa.</p>
            <p>
              Puede que tu contenido sea mejorable, pero aunque lo mejores, <br />
              como no sepas qué pide a día de hoy Instagram y sus múltiples <br />
              algoritmos (sí, no es uno, son muchos) <span className="font-bold">tu alcance seguirá <br />
              descendiendo hasta volverte prácticamente invisible para <br />
              tu audiencia,</span> si es que no lo eres ya.
            </p>
          </div>
          <div className="flex mt-24 mb-72">
            <div className="flex flex-col gap-8 font-alexandria font-light text-3xl text-left text-white">
              <p>
                Con <span className="font-bold">INSTAGROWTH</span> no vamos a decirte <br />
                cómo funciona el algoritmo de Instagram, <br />
                vamos a hacerlo más práctico.
              </p>
              <p>
                Vamos a decirte exactamente qué le gusta <br />
                a este algoritmo actualmente para que <br />
                sepas cómo darselo y que así de forma <br />
                rápida <span className="font-bold">puedas recuperar todo el alcance <br />
                y posicionamiento que has ido perdiendo.</span>
              </p>
              <p>
                Pero eso no es todo, esto no se trata <br />
                solo de recuperar, <span className="font-bold">sino de lograr también <br />
                alturas que nunca antes habías tocado</span> <br />
                en visualizaciones, comentarios, <br />
                reacciones y respuestas.
              </p>
            </div>
            <Image 
              src={"assets/images/route.png"}
              
              height={350}
              width={400}
              alt="route"
              />
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center">
          <div>
            <Image 
              src={"assets/images/notice.png"}
              width={1200}
              height={1200}
              alt="notice"
              className="inline-block mt-[-340px]"
            />
            <div className="mt-[-180px]">
              <JoinButton 
                width={350}
                fontSize={24}
                variant="filled"  
                color="violet"
                size="xl"
                radius="xl"
                checkSize={24}
                checkStroke={3.5}
              />
            </div>
          </div>
          <div className="flex mt-32">
            <div className="flex flex-col gap-8 font-alexandria font-light text-3xl text-left">
              <p className="font-bold text-6xl">
                ¿En cuánto tiempo <br />
                <span className="text-violet-600">se ven los resultados?</span>
              </p>
              <p>
                Esto es un <span className="font-bold">Sistema Probado y mejorado <br />
                durante 3 años,</span> no tienes que romperte <br />
                la cabeza pensando qué subir, el formato, <br />
                la edición... Eso ya lo hemos hecho nosotros.
              </p>
              <p>
                Con <span className="font-bold">INSTAGROWTH </span> verás resultados <br />
                desde el minuto 1, al instante, porque solo <br />
                tendrás que seguir el paso a paso exacto <br />
                que nosotros te marcamos.
              </p>
              <p className="text-violet-600 font-bold">
                Aprende cómo generar alto alcance <br />
                en minutos
              </p>
              <p>
                Es tan fácil de implementar que <span className="font-bold">podrás <br />
                hacerlo en cualquier lugar y momento,</span> <br />
                en el autobus, dando un paseo, en tiempos <br />
                muertos, por la mañana, por la noche.
              </p>
            </div>
            <Image 
              src={"assets/images/watches.png"}
              height={500}
              width={1000}
              alt="watches"
              className="max-w-[600px]"
              
            />
          </div>
          <div id="div-2">
            <div className="flex flex-col gap-0 items-center mt-32">
              <p className=" font-bold text-6xl">
                ¿Para quién es este curso?
              </p>
              <Image 
                src={"assets/icons/dotted-line.png"}
                height={500}
                width={800}
                alt="dottedLine"
                className=""
              />
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in-sine" className="flex flex-col mt-12 gap-4 font-alexandria font-light text-4xl text-center items-center mb-24">
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Gimnasios
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Centros deportivos
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Entrenadores personales
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Nutricionistas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Dietistas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Fisioterapeutas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Influences fitness
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full hover:bg-violet-500 hover:text-white">
                Apasionados del gym
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col items-center pb-32">
          <div className="flex gap-8 mt-32">
            <div className="flex flex-col gap-6 font-alexandria font-light text-center text-2xl">
              <p className="font-bold text-5xl">Método <br />
              Tradicional</p>
              <p>
                La mayoría de cursos de <br />
                Instagram se enfocan en <br />
                crear contenido <span className="font-bold">con una <br />
                línea editorial y gráfica muy <br />
                muy compleja y demandante.</span>
              </p>
              <p>
                Publicaciones todos los dias, <br />
                reels, carruseles, stories <br />
                y exposición.
              </p>
              <p className="font-bold">
                Exige mucha creatividad, <br />
                disciplina y tiempo
              </p>
              <div className="flex flex-col gap-4 font-alexandria font-bold text-2xl items-center mt-8">
                <p className="bg-black rounded-full px-16 py-2 text-white">
                  X Posts todos los días.
                </p>
                <p className="bg-black rounded-full px-10 py-2 text-white ">
                  X Stories por la mañana, <br />
                  por la tarde y por la noche.
                </p>
                <p className="bg-black rounded-full px-10 py-2 text-white">
                  X Tienes que tener muchas <br />
                  ideas de contenido.
                </p>
              </div>
              <div>
                <p className="font-bold">Resultado</p>
                <div className="flex items-start justify-center gap-2">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Poco crecimiento <br />
                  de seguidores</p>
                  
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Pocos likes</p>
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Pocos comentarios</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-l-slate-400 border-black">

            </div>
            <div className="flex flex-col gap-6 font-alexandria font-light text-center text-2xl">
              <p className="font-bold text-5xl">Método <br />
              <span className="text_gradient">INSTAGROWTH</span></p>
              <p>
                En INSTAGROWTH <span className="font-bold"> la linea <br />
                editorial y grafica no son <br />
                complejas ni demandantes.</span> 
                
              </p>
              <p>
                El trabajo es eficiente porque <br />
                la base del contenido es <br />
                creada por tu propia audiencia <br />
                (funciona incluso con  muy <br />
                poca audiencia).
              </p>
              <p className="font-bold">
                Tú trabajas menos y aun así <br />
                el contenido tiene diez veces <br />
                más impacto.
              </p>
              <div data-aos="flip-right" data-aos-duration="1000" className="flex flex-col gap-4 font-alexandria font-bold text-2xl items-center">
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-16 py-2 text-white">
                  Foco en contenido por <br />
                  secuencias adictivas
                </p>
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-12 py-2 text-white ">
                  Tu propia audiencia crea <br />
                  el contenido
                </p>
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-6 py-2 text-white">
                  No tienes que tener muchas <br />
                  ideas ni contar tu vida
                </p>
              </div>
              <div>
                <p className="font-bold">Resultado</p>
                <div className="flex items-start justify-center gap-2">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Mucho engagement (reacciones,  <br />
                  respuestas, comentarios...).</p>
                  
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Creación de conversaciones <br />
                  reales con seguidores <br />
                  (también reales).</p>
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Crecimiento creando contenido <br />
                  solo con lo que a tu audiencia <br />
                  le interesa.</p>
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Si vendes productos/servicios <br />
                  estas secuencias les harán <br />
                  desear comprarte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center">
          <div className="pt-16 flex flex-col items-center pb-16">
            <p className="font-alexandria font-bold text-5xl mb-12">Base del <span className="text-violet-600">método:</span></p>
            
            <div data-aos="zoom-in" className="flex flex-col gap-6 text-white text-2xl font-light">
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/brain.png"}
                    height={75}
                    width={75}
                    alt="brain"
                  />
                  
                  <p>
                    <span className="font-bold">20 fundamentos de psicología de la atención </span><br />
                    Facilita el proceso de creación y despierta <br />
                    la atención y el deseo de tu público.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/ilumination.png"}
                    height={75}
                    width={75}
                    alt="iluminated"
                  />
                  
                  <p>
                    <span className="font-bold">Secuencia temática </span><br />
                    Contenido con contexto que generan interés <br />
                    y crean deseo sobre tu mensaje y marca.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/megaphone.png"}
                    height={75}
                    width={75}
                    alt="megaphone"
                  />
                  
                  <p>
                    <span className="font-bold">Amplificación  de tu mensaje </span><br />
                    Aumenta tu base de seguidores y la audiencia<br />
                    que consume tu contenido.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/heart.png"}
                    height={75}
                    width={75}
                    alt="heart"
                  />
                  
                  <p>
                    <span className="font-bold">Conexión genuina </span><br />
                    Conecta de verdad con tu público sin parecer <br />
                    falso ni ser otra persona.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/cog.png"}
                    height={75}
                    width={75}
                    alt="cog"
                  />
                  
                  <p>
                    <span className="font-bold">Algoritmo </span><br />
                    Deja de pelearte con el algoritmo y utilízalo <br />
                    como aliado.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black px-12 py-6 rounded-full">
                  <Image 
                    src={"assets/icons/inbox.png"}
                    height={75}
                    width={75}
                    alt="inbox"
                  />
                  
                  <p>
                    <span className="font-bold">Bandeja de entrada rentable </span><br />
                    Metodología de conversión para generar<br />
                    ingresos (tantos como quieras).
                  </p>
                </div>
              
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/4"/>
          <div className="flex flex-col items-center gap-28 pt-16 pb-36">
            <p className="font-bold text-5xl"> ¿Qué incluye <span className="text-violet-600">INSTAGROWTH?</span></p>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-1.png"}
                width={800}
                height={500}
                alt="package 1"
              />
              <p className="text-2xl font-light mt-[-260px] ml-[300px]">
                <span className="font-bold"> 5 + 1 módulos de contenido <br />
                con 30 lecciones formativas</span> <br />
                con la más actualizada <br />
                información y las últimas <br />
                tendencias de verano 2023.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-2.png"}
                width={800}
                height={500}
                alt="package 2"
              />
              <p className="text-2xl font-light mt-[-230px] mr-[300px]">
               <span className="font-bold"> Planes de acción</span> para <br />
                implementar lo aprendido <br />
                de forma inmediata.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-3.png"}
                width={800}
                height={500}
                alt="package 3"
              />
              <p className="text-2xl font-light mt-[-200px] ml-[300px]">
                <span className="font-bold"> Tutoriales</span> para que hagas <br />
                el paso a paso perfecto.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-4.png"}
                width={800}
                height={500}
                alt="package 4"
              />
              <p className="text-2xl font-light mt-[-260px] mr-[300px]">
                <span className="font-bold"> Casos de Estudio Reales</span> <br />
                de perfiles que han crecido <br />
                con INSTAGROW para <br />
                que copies y pegues lo que <br />
                los hizo crecer de forma <br />
                exponencial
              </p>
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/4"/>
          <div className="mx-80 pt-16 flex flex-col items-start gap-8 self-start pb-16">
            <p className="font-bold text-4xl text-left">
              <span className="text_gradient">5 BONOS EXCLUSIVOS</span> <br />
              TOTALMENTE GRATIS CON ESTA<br />
              OFERTA (valorados en 697 €):
            </p>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 1</p>
              </div>
              <p className="font-light text-2xl">
                <span className="font-bold">Estructura Semanal Contenido RRSS,</span> para que sepas exactamente <br />
                que subir cada día que quieras hacer posts con una estructura psicológica<br />
                probada que engancha a la audiencia (valorado en 100 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 2</p>
              </div>
              <p className="font-light text-2xl">
                <span className="font-bold">Plantillas descargables y personalizables</span> para los distintos formatos <br />
                y tamaños para que solo tengas que añadir el texto o fotos que quieres<br />
                y tenerlas listas para publicar en menos de 30 minutos (valorado en 80 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 3</p>
              </div>
              <p className="font-light text-2xl">
                <span className="font-bold">ViralStories:</span> Estrategia Completa para multiplicar x10 el alcance de tus <br />
                 Stories (valorado en 220 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 4</p>
              </div>
              <p className="font-light text-2xl">
                <span className="font-bold">Crea el contenido de un año en 10 minutos con Inteligencia Artificial.</span><br />
                Tutorial paso a paso de cómo utilizar de forma exacta ChatGPT y los <br />
                mejores prompts (si no sabes lo que son no te preocupes, lo descubrirás <br />
                en Instagrowth) para crear contenido altamente atractivo en el sector <br />
                del fitness en minutos (valorado en 200 €).
                
              </p>
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/4"/>
          <div className="pt-16 flex flex-col items-center pb-36">
            <Image 
              src={"assets/images/price.png"}
              width={800}
              height={1000}
              alt="price"
            />
            <div className="mt-[-150px]">
              <JoinButton 
                width={350}
                fontSize={24}
                variant="filled"  
                color="violet"
                size="xl"
                radius="xl"
                checkSize={24}
                checkStroke={3.5}
              />
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/4"/>
          <div className="pt-16 flex flex-col items-center pb-24">
            <p className="text-4xl font-bold">
              MÓDULOS <span className="text-violet-600">DE CONTENIDO</span>
            </p>
            <ModuleAccordion />
          </div>
          <hr className="border-1 border-slate-400 w-1/4"/>
          <div className="pt-16 flex flex-col items-center pb-16">
            <p className="text-5xl font-bold">
              PREGUNTAS <span className="text-violet-600">FRECUENTES</span>
            </p>

            <div>
              <QuestionAccordion />
            </div>

          </div>
          <div className="flex flex-col items-center gap-4 pb-24">
            <Image 
              src={"assets/images/whatsapp.png"}
              width={168}
              height={168}
              alt="whatsapp logo"
              
            />
            <p className="text-6xl font-bold">¿Tienes dudas?</p>
            <p className="text-2xl font-light text-center">
              Habla con nosotros y trataremos de ayudarte en todo lo posible. <br />
              (Haz click en el ícono de whatsapp para hablar en privado).
            </p>
            <p className="mt-8 font-extralight">© 2023 Instagrowth. Todos los derechos reservados</p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex flex-col w-full">
        <div className="bg-[url('assets/images/background-1.png')] bg-cover bg-no-repeat bg-center flex flex-col">
          <div className="mx-4 pt-12 flex flex-col items-center">
            <Image 
              src="assets/images/logo.png"
              width={250}
              height={250}
              alt="logo"
            />
            <p className="text-white font-alexandria font-bold text-3xl mt-12 text-center">Haz de tu Instagram <br />
              el Centro de Atención <br />
              <span className="text-violet-600">del Fitness</span>
            </p>
            <Image 
              src={"assets/images/starting-post.png"}
              width={800}
              height={1000}
              alt="starting-post"
              className="mt-8 w-full "
            
            />
            <JoinButton 
              width={350}
              fontSize={24}
              variant="filled"  
              color="violet"
              size="xl"
              radius="xl"
              checkSize={24}
              checkStroke={3.5}
            />
            

          </div>
          <Image 
              src={"assets/images/transition-line.png"}
              width={500}
              height={500}
              alt="starting-post"
              className="mt-8 w-full"
            
            />

        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col pt-16 items-center justify-center">
          <div className="flex flex-col mx-4 justify-center items-center">
            <div className="text-md font-alexandria font-light">
              <p className="text-2xl font-bold">Te <span className="text-violet-600">gustaría</span> ser capaz <br /> de que:</p>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿La audiencia <span className="font-bold">te reconozca</span> <br />
                  como un verdadero referente?
                </p>
                
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿Tu marca personal <span className="font-bold">crezca <br />
                  de manera exponencial </span> <br/>
                  en Redes Sociales?
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿Tu Instagram se vuelva <span className="font-bold">un imán <br />
                  de atención</span> para decenas <br />
                  de miles de personas? </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿Tus contenidos dejen de pasar <br />
                  desapercibidos y <span className="font-bold">se conviertan en <br />
                  virales?</span>
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿Tus Stories tengan <span className="font-bold">miles y miles <br />
                  de visualizaciones </span> de forma <br />
                  constante?
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="check"
                />
                <p> 
                  ¿Tus seguidores reacciones, <br />
                  respondan, comenten, <br />
                  <span className="font-bold">te escriban de forma imparable?</span>
                </p>
              </div>
              <div className="check_text">
                <Image 
                  src="assets/icons/color-check.png" 
                  width={40}
                  height={40}
                  alt="color-check"
                />
                <p> 
                  ¿El algoritmo <span className="font-bold">premie de una vez <br />
                  por todas</span> todo lo que compartes?
                </p>
              </div>
            </div>
            <Image 
              src="assets/images/phone.png"
              width={1000}
              height={500}
              alt="phone"
              className="w-full mt-8"
            />
          </div>
          <div className="flex flex-col gap-4 items-center mt-20 font-alexandria font-light text-center text-sm">
            <div className="flex align-middle">
              <p className="text-2xl font-bold">¿Escéptico?</p>
              <Image 
                src={"assets/icons/emoji.png"}
                width={30}
                height={25}
                alt="thinking-emoji"
              />
            </div>

            <p>Normal, nosotros también <i>lo éramos.</i></p>
           
            <p>
              Hasta que descubrimos un <span className="font-bold">Sistema para "Hackear"</span> <br />
              (de forma 100% legal y real) el alcance de Instagram.
            </p>
            
            <p>
              Y para además poder replicar una y otra vez para que todo <br />
              <span className="font-bold">ese alcance extra no vuelva a bajar y se mantenga.</span>
            </p>

          </div>
          <Image 
            src={"assets/images/phrase.png"}
            width={400}
            height={400}
            alt="phrase"
            className="mt-8 w-full"
          />
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center 
        flex flex-col gap-4 py-16 items-center  font-alexandria font-light text-center text-sm justify-center">
          <p>
            <span className="font-bold">La atención es cada vez menor</span>, o le das a la audiencia 
            lo que realmente está buscando, o estás perdido.
          </p>
          
          <p>
            En Mundotrainers llevamos 3 años utilizando estrategias 
            probadas y optimizándolas de captación de atención, 
            lo que ha hecho <span className="font-bold">crecer +250 cuentas de Instagram 
            de entrenadores, nutricionistas, dietistas y apasionados 
            del fitness.
            </span>

          </p>
          
          <p>
            Con ello no han logrado solo audiencia y atención, 
            <span className="font-bold"> sino también ingresos extras gracias a esto.</span>
          </p>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col pt-12 items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-4">
              <p className="font-alexandria font-bold text-center text-xl ">
                <span className="text_gradient">INSTAGROWTH</span> es el método 
                que te permite lograr todo 
                esto y mucho más.

              </p>
              
              <p className="font-alexandria font-bold text-left text-xl justify-center">
                ¿Cómo funciona Instagrowth?
              </p>
              
              <p className="font-alexandria font-light text-center text-md justify-center">
                Instagrowth es una forma de utilizar 
                las herramientas de Instagram (posts, 
                reels, carruseles, stories, MD's...) <span className="font-bold">para
                generar una conexión profunda con 
                la audiencia</span> que te sigue.
              </p>
            </div>
            <Image 
              src={"assets/images/laptop.png"}
              width={400}
              height={400}
              alt="laptop"
              className="mt-4"
            />
          </div>
          <div className="flex flex-col gap-4 items-center font-alexandria font-light text-center text-sm pb-24">
            
            <p>
              A través de temas predefinidos y contenidos que  
              la propia audiencia te da (aprenderás como hacerlo 
              dentro de Instagrowth), te centras en temas  
              <span className="font-bold">que captan la atención y el interés
              genuino de la gente.</span>
            </p>
            
            <p>
              Cuando lo haces bien, <span className="font-bold">le das a la gente  
              lo que realmente les interesa</span>, generando   
              curiosidad y deseo, se enganchan a tu contenido y 
              a lo que tienes que decir.
            </p>
            
            <p>
              Con esto, en consecuencia, <span className="font-bold"> mejoras el  
              comportamiento, aumentas las visitas, conectas   
              realmente con tu audiencia y consigues 
              más ingresos.</span>
            </p>
          </div>
        
        </div>
        <div className="bg-[url('assets/images/background-3.png')] bg-cover bg-no-repeat bg-center  flex flex-col items-center">
          <Image 
            src={"assets/images/circle.png"}
            width={1500}
            height={800}
            alt="phrase"
            className="inline-block mt-[-40px]"
          />
          <div className="flex flex-col gap-4 font-alexandria font-light text-sm text-center text-white">
            <p className="text-violet-600 font-bold">¿Has notado que tu alcance cada vez es menor?</p>
            <p>Es normal.</p>
            <p>Es lo que hace el tan mencionado (y poco entendido) <span className="font-bold">ALGORITMO de Instagram.</span></p>
            <p>No es tu culpa.</p>
            <p>
              Puede que tu contenido sea mejorable,  
              pero aunque lo mejores, como no sepas qué pide 
              a día de hoy Instagram y sus múltiples algoritmos 
               (sí, no es uno, son muchos) <span className="font-bold">tu alcance 
               seguirá descendiendo hasta volverte prácticamente 
               invisible para tu audiencia. </span> si es que no lo eres ya.
              
              
            </p>
          </div>
          <div className="flex flex-col mt-12 mb-48 items-center">
            <Image 
              src={"assets/images/route.png"}
              
              height={50}
              width={300}
              alt="route"
              className="w-3/4"
            />
            <div className="flex flex-col gap-8 font-alexandria font-light text-md text-center text-white">
            
              <p>
                Con <span className="font-bold">INSTAGROWTH</span> no vamos a decirte 
                cómo funciona el algoritmo de Instagram, 
                vamos a hacerlo más práctico.
              </p>
              <p>
                Vamos a decirte exactamente qué le gusta 
                a este algoritmo actualmente para que 
                sepas cómo darselo y que así de forma 
                rápida <span className="font-bold">puedas recuperar todo el alcance 
                y posicionamiento que has ido perdiendo.</span>
              </p>
              <p>
                Pero eso no es todo, esto no se trata 
                solo de recuperar, <span className="font-bold">sino de lograr también 
                alturas que nunca antes habías tocado</span> 
                en visualizaciones, comentarios, 
                reacciones y respuestas.
              </p>
            </div>
            
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center">
          <div>
            <Image 
              src={"assets/images/notice.png"}
              width={1500}
              height={1500}
              alt="notice"
              className="w-full mt-[-120px]"
            />
            <div className="mt-[-65px]">
              <JoinButton 
                width={180}
                fontSize={12}
                variant="filled"  
                color="violet"
                size="sm"
                radius="xl"
                checkSize={16}
                checkStroke={2.5}
              />
            </div>
          </div>
          <div className="flex mt-32 mx-6">
            <div className="flex flex-col gap-8 font-alexandria font-light text-md text-left">
              <p className="font-bold text-xl">
                ¿En cuánto tiempo <br />
                <span className="text-violet-600">se ven los resultados?</span>
              </p>
              <p>
                Esto es un <span className="font-bold">Sistema Probado y mejorado 
                durante 3 años,</span> no tienes que romperte 
                la cabeza pensando qué subir, el formato, 
                la edición... Eso ya lo hemos hecho nosotros.
              </p>
              <p>
                Con <span className="font-bold">INSTAGROWTH </span> verás resultados 
                desde el minuto 1, al instante, porque solo 
                tendrás que seguir el paso a paso exacto 
                que nosotros te marcamos.
              </p>
              <p className="text-violet-600 font-bold">
                Aprende cómo generar alto alcance 
                en minutos
              </p>
              <p>
                Es tan fácil de implementar que <span className="font-bold">podrás 
                hacerlo en cualquier lugar y momento, </span> 
                en el autobus, dando un paseo, en tiempos 
                muertos, por la mañana, por la noche.
              </p>
            </div>
            <Image 
              src={"assets/images/watches.png"}
              height={500}
              width={900}
              alt="watches"
              className="w-[50px] h-[50px] -ml-12"
              
            />
          </div>
          <div>
            <div className="flex flex-col gap-0 items-center mt-32 mx-4">
              <p className=" font-bold text-2xl items-center">
                ¿Para quién es este curso?
              </p>
              <Image 
                src={"assets/icons/dotted-line.png"}
                height={500}
                width={800}
                alt="dottedLine"
                className=""
              />
            </div>
            <div className="flex flex-col mt-12 gap-4 font-alexandria font-light text-md text-center items-center mx-4 mb-24">
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Gimnasios
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Centros deportivos
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Entrenadores personales
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Nutricionistas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Dietistas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Fisioterapeutas
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Influences fitness
              </p>
              <p className="font-bold bg-gray-200 rounded-full px-16 py-2 w-full">
                Apasionados del gym
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center bg-gray-300 flex flex-col items-center pb-32">
          <div className="flex flex-col px-6 gap-8 mt-32">
            <div className="flex flex-col gap-6 font-alexandria font-light text-center text-md">
              <p className="font-bold text-4xl">Método <br />
              Tradicional</p>
              <p>
                La mayoría de cursos de 
                Instagram se enfocan en 
                crear contenido <span className="font-bold">con una 
                línea editorial y gráfica muy 
                compleja y demandante.</span>
              </p>
              <p>
                Publicaciones todos los dias, 
                reels, carruseles, stories 
                y exposición.
              </p>
              <p className="font-bold">
                Exige mucha creatividad, 
                disciplina y tiempo
              </p>
              <div className="flex flex-col gap-4 font-alexandria font-bold text-lg items-center">
                <p className="bg-black rounded-full px-10 py-2 text-white">
                  X Posts todos los días.
                </p>
                <p className="bg-black rounded-full px-7 py-2 text-white ">
                  X Stories por la mañana, <br />
                  por la tarde y por la noche.
                </p>
                <p className="bg-black rounded-full px-7 py-2 text-white">
                  X Tienes que tener muchas <br />
                  ideas de contenido.
                </p>
              </div>
              <div>
                <p className="font-bold">Resultado</p>
                <div className="flex items-center justify-center gap-2">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={25}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Poco crecimiento 
                  de seguidores</p>
                  
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={25}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Pocos likes</p>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/x-mark.png"}
                    height={25}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Pocos comentarios</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-l-slate-400 border-black">

            </div>
            <div className="flex flex-col gap-6 font-alexandria font-light text-center text-md">
              <p className="font-bold text-4xl">Método <br />
              <span className="text_gradient">INSTAGROWTH</span></p>
              <p>
                En INSTAGROWTH <span className="font-bold"> la linea 
                editorial y grafica no son 
                complejas ni demandantes.</span> 
                
              </p>
              <p>
                El trabajo es eficiente porque 
                la base del contenido es 
                creada por tu propia audiencia 
                (funciona incluso con  muy 
                poca audiencia).
              </p>
              <p className="font-bold">
                Tú trabajas menos y aun así 
                el contenido tiene diez veces 
                más impacto.
              </p>
              <div className="flex flex-col gap-4 font-alexandria font-bold text-lg items-center">
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-16 py-2 text-white">
                  Foco en contenido por 
                  secuencias adictivas
                </p>
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-12 py-2 text-white ">
                  Tu propia audiencia crea 
                  el contenido
                </p>
                <p className="bg-gradient-to-r from-yellow-300  via-red-500  to-violet-600 rounded-full px-6 py-2 text-white">
                  No tienes que tener muchas 
                  ideas ni contar tu vida
                </p>
              </div>
              <div>
                <p className="font-bold">Resultado</p>
                <div className="flex items-start justify-center gap-2">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Mucho engagement (reacciones,  <br />
                  respuestas, comentarios...).</p>
                  
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Creación de conversaciones <br />
                  reales con seguidores <br />
                  (también reales).</p>
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Crecimiento creando contenido <br />
                  solo con lo que a tu audiencia <br />
                  le interesa.</p>
                </div>
                <div className="flex items-start justify-center gap-2 mt-4">
                  <Image 
                    src={"assets/icons/good-check.png"}
                    height={50}
                    width={25}
                    alt="x-mark"
                    className="mt-1"
                  />
                  <p>Si vendes productos/servicios <br />
                  estas secuencias les harán <br />
                  desear comprarte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('assets/images/background-2.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center">
          <div className="pt-16 flex flex-col items-center pb-16">
            <p className="font-alexandria font-bold text-3xl mb-12">Base del <span className="text-violet-600">método:</span></p>
            
            <div className="flex flex-col gap-6 text-white text-sm font-light">
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/brain.png"}
                    height={60}
                    width={60}
                    alt="brain"
                  />
                  
                  <p>
                    <span className="font-bold">20 fundamentos de psicología de la atención </span><br />
                    Facilita el proceso de creación y despierta
                    la atención y el deseo de tu público.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/ilumination.png"}
                    height={60}
                    width={60}
                    alt="iluminated"
                  />
                  
                  <p>
                    <span className="font-bold">Secuencia temática </span><br />
                    Contenido con contexto que generan interés 
                    y crean deseo sobre tu mensaje y marca.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/megaphone.png"}
                    height={60}
                    width={60}
                    alt="megaphone"
                  />
                  
                  <p>
                    <span className="font-bold">Amplificación  de tu mensaje </span><br />
                    Aumenta tu base de seguidores y la audiencia 
                    que consume tu contenido.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/heart.png"}
                    height={60}
                    width={60}
                    alt="heart"
                  />
                  
                  <p>
                    <span className="font-bold">Conexión genuina </span><br />
                    Conecta de verdad con tu público sin parecer 
                    falso ni ser otra persona.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/cog.png"}
                    height={60}
                    width={60}
                    alt="cog"
                  />
                  
                  <p>
                    <span className="font-bold">Algoritmo </span><br />
                    Deja de pelearte con el algoritmo y utilízalo 
                    como aliado.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black mx-4 px-10 py-2 rounded-full">
                  <Image 
                    src={"assets/icons/inbox.png"}
                    height={60}
                    width={60}
                    alt="inbox"
                  />
                  
                  <p>
                    <span className="font-bold">Bandeja de entrada rentable </span><br />
                    Metodología de conversión para generar 
                    ingresos (tantos como quieras).
                  </p>
                </div>
              
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/2"/>
          <div className="flex flex-col items-center gap-14 pt-16 pb-36">
            <p className="font-bold text-3xl"> ¿Qué incluye <span className="text-violet-600">INSTAGROWTH?</span></p>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-1.png"}
                width={500}
                height={500}
                alt="package 1"
                className="w-full"
              />
              <p className="text-xs font-light mt-[-120px] ml-[180px]">
                <span className="font-bold"> 5 + 1 módulos de contenido 
                con 30 lecciones formativas </span> 
                con la más actualizada 
                información y las últimas <br />
                tendencias de verano 2023.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-2.png"}
                width={500}
                height={500}
                alt="package 2"
                className="w-full"
              />
              <p className="text-xs font-light mt-[-110px] mr-[150px]">
               <span className="font-bold"> Planes de acción</span> para <br />
                implementar lo aprendido <br />
                de forma inmediata.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-3.png"}
                width={500}
                height={500}
                alt="package 3"
                className="w-full"
              />
              <p className="text-xs font-light mt-[-100px] ml-[180px]">
                <span className="font-bold"> Tutoriales</span> para que hagas 
                el paso a paso perfecto.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src={"assets/images/package-4.png"}
                width={500}
                height={500}
                alt="package 4"
                className="w-full"
              />
              <p className="text-xs font-light mt-[-125px] mr-[140px]">
                <span className="font-bold"> Casos de Estudio Reales</span> <br/>
                de perfiles que han crecido <br/>
                con INSTAGROW para <br/>
                que copies y pegues lo que <br />
                los hizo crecer de forma <br />
                exponencial
              </p>
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/2 "/>
          <div className="mx-4 pt-16 flex flex-col items-start gap-8 self-start pb-16">
            <p className="font-bold text-2xl text-left">
              <span className="text_gradient">5 BONOS EXCLUSIVOS</span> <br />
              TOTALMENTE GRATIS CON ESTA<br />
              OFERTA (valorados en 697 €):
            </p>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-2xl">BONUS 1</p>
              </div>
              <p className="font-light text-lg">
                <span className="font-bold">Estructura Semanal Contenido RRSS,</span> para que sepas exactamente 
                que subir cada día que quieras hacer posts con una estructura psicológica 
                probada que engancha a la audiencia (valorado en 100 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 2</p>
              </div>
              <p className="font-light text-lg">
                <span className="font-bold">Plantillas descargables y personalizables</span> para los distintos formatos
                y tamaños para que solo tengas que añadir el texto o fotos que quieres 
                y tenerlas listas para publicar en menos de 30 minutos (valorado en 80 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 3</p>
              </div>
              <p className="font-light text-lg">
                <span className="font-bold">ViralStories:</span> Estrategia Completa para multiplicar x10 el alcance de tus 
                 Stories (valorado en 220 €).
                
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image 
                  src={"assets/icons/gift.png"}
                  width={25}
                  height={25}
                  alt="gift"
                />
                <p className="text-violet-600 font-bold text-3xl">BONUS 4</p>
              </div>
              <p className="font-light text-lg">
                <span className="font-bold">Crea el contenido de un año en 10 minutos con Inteligencia Artificial. </span> 
                Tutorial paso a paso de cómo utilizar de forma exacta ChatGPT y los 
                mejores prompts (si no sabes lo que son no te preocupes, lo descubrirás 
                en Instagrowth) para crear contenido altamente atractivo en el sector 
                del fitness en minutos (valorado en 200 €).
                
              </p>
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/2"/>
          <div className="mx-2 pt-16 flex flex-col items-center pb-36">
            <Image 
              src={"assets/images/price.png"}
              width={800}
              height={1000}
              alt="price"
            />
            <div className="mt-[-80px]">
              <JoinButton 
                width={320}
                fontSize={20}
                variant="filled"  
                color="violet"
                size="md"
                radius="xl"
                checkSize={24}
                checkStroke={3.5}
              />
            </div>
          </div>
          <hr className="border-1 border-slate-400 w-1/2"/>
          <div className="pt-16 flex flex-col items-center pb-24 mx-2">
            <p className="text-4xl font-bold text-center">
              MÓDULOS <span className="text-violet-600">DE CONTENIDO</span>
            </p>
            <ModuleAccordion />
          </div>
          <hr className="border-1 border-slate-400 w-1/2"/>
          <div className="mx-2 pt-16 flex flex-col items-center pb-16">
            <p className="text-4xl font-bold text-center">
              PREGUNTAS <span className="text-violet-600">FRECUENTES</span>
            </p>

            <div>
              <QuestionAccordion />
            </div>

          </div>
          <div className="flex flex-col items-center text-center gap-4 pb-24">
            <Image 
              src={"assets/images/whatsapp.png"}
              width={250}
              height={250}
              alt="whatsapp logo"
              
            />
            <p className="text-3xl font-bold">¿Tienes dudas?</p>
            <p className="text-md font-light text-center">
              Habla con nosotros y trataremos de ayudarte en todo lo posible. <br />
              (Haz click en el ícono de whatsapp para hablar en privado).
            </p>
            <p className="mt-8 font-xs font-extralight">© 2023 Instagrowth. Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopSection
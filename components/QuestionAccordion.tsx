import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"




const QuestionAccordion = () => {
  
  return (
    <Accordion type="multiple" className="mt-8 w-full flex flex-col gap-8" defaultValue={["item-1"]}>
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>1. ¿Funciona para quien tiene pocos seguidores?</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <p>
              La verdad es que si tienes pocos seguidores, no vas a tener <br />
              200, 300... 1000 personas reaccionando a tus contenidos <br />
              desde el primer día. <span className="font-bold">Pero tendrás una gran ventaja.</span>
            </p>
            <p>
              Como tienes pocos seguidores, tendrás más tiempo <br />
              para interactuar con cada persona. <span className="font-bold"> Y podrás hacer esa <br />
              interacción de una forma más cercana y personal.</span>
            </p>

            <p>
              El resultado de esto es que esas personas <span className="font-bold"> te darán más <br />
              información sobre el contenido que les interesa </span> (incluso <br />
              te pedirán ayuda si prestas servicios o vendes productos) <br />
              y con esto empezará a rodar la bola de nieve cada vez <br />
              más rápido y cada vez de más tamaño.
            </p>

            <p>
              Así que pasarás poco tiempo con pocos seguidores si <br />
              utilizas Instagrowth de forma correcta.
            </p>
            
            <p>
              Varios de nuestros alumnos comenzaron con 200, 500, <br />
              1000... 3000 seguidores y tuvieron resultados.
            </p>

            <p>
              Por lo tanto, <span className="font-bold"> funciona los que están todavía en el <br />
              principio y para los que ya son más grandes. </span> De hecho, <br />
              a veces hay gente que tiene 20, 50... 80 mil seguidores <br />
              y tienen peor engagement que los que tienen un perfil<br />
              pequeño.
            </p>

            <p>
              A veces hay perfiles con +100.000 seguidores y en los <br />
              directos no pasan de 20 personas.
            </p>

            <p>
              Luego hay otros perfiles que tienen menos seguidores y <br />
              reciben 3.5 a 10 veces más visitas. ¿Y eso por qué? Porque <br />
              usan INSTAGROWTH. <span className="font-bold">Así que no se trata del número de <br />
              seguidores que tengas, sino de cómo te conectas con <br />
              ellos.</span> Eso es mucho más importante.
            </p>

          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>2. Los seguidores que tengo están desconectados, <br />
          ¿funcionará en ese caso?</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            
            <p>
              <span className="font-bold"> INSTAGROWTH es el remedio para reenganchar a la <br />
              audiencia a tu perfil.</span> Porque cuando usas la técnica, <br />
              vuelves a aparecer para todos los que hace tiempo que <br />
              no interactúan contigo.
            </p>

            <p>
              <span className="font-bold"> ¿Conoces esa fila de Stories? </span> Volverás a estar entre los <br />
              primeros en ella. Es como si Instagram pensara "Oye, aquí <br />
              hay más interacción, voy a mostrárselo a más gente".
            </p>
            
          
            <p>
              Y lo mejor es que no aparecerás ante esas personas con<br />
              el contenido de antes. <span className="font-bold">Aparecerás con tu nueva versión <br />
              de hacer contenido: tu versión de Instagrowth.</span>
            </p>

            <p>
              Así que no. No necesitas crean un nuevo perfil,<br />
              con Instagrowth simplemente <span className="font-bold">puedes empezar <br />
              a reengancharte.</span>
            </p>


          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>3. No tengo para estar todo el día en redes <br />
            sociales, ¿funcionara en ese caso?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <p>
              Cuando entres en Instagrowth verás que tenemos una <br />
              estructura en la que no tienes que crear contenido todos <br />
              los días.
            </p>
            <p>
              Ahora, cuando apliques la técnica y veas lo adictiva <br />
              y atractiva que es, tanto para ti como para tus seguidores, <br />
              no querrás dejar Instagram. <span className="font-bold"> Porque tu contenido recibirá <br />
              muchos comentarios e interacciones en la comunidad.</span>
            </p>

            <p>
              Lo que te estresa y te hace sentir mal no es crear el <br />
              contenido, es cuando sigues creando exhaustivamente <br />
              y no tienes respuesta. <span className="font-bold"> Lo que frusta a la gente no es el <br />
              trabajo, es el trabajo sin retorno. Instagrowth es trabajo <br />
              con retorno.</span>
            </p>

            <p>
              Eso sí, tendrás que dedicar una cierta cantidad de tiempo<br />
              para crear ese retorno. Solo que no tendrás que idear tantas <br />
              cosas, que es una de las cosas que más cansa.
            </p>
            
            <p>
              Con Instagrowth esta sensación de quedarte sin contenido<br />
              se acabó. <span className="font-bold">Porque quien te va a dar las ideas es tu propia <br />
              audiencia...</span> Y la capacidad de tu audiencia para generar <br />
              ideas es infinita.
            </p>

          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>4. No tengo un producto, ¿funcionara en ese caso?</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <p>
              El hecho de que aún no tengas un producto o servicio <br />
              es una de las principales razones por las que Instagrowth <br />
              es tan interesante para ti.
            </p>
            <p>
              Con esta estrategia, en caso de que quieras generar <br />
              ingresos, <span className="font-bold">podrás averiguar que tipo de producto sería <br />
              el más interesante para tu audiencia, y cuál es la mejor <br />
              manera de enfocar este producto cuando lo ofrezcas.</span>
            </p>

            <p>
              Así que, cuando usas Instagrowth, incluso sin un producto, <br />
              además de aumentar el crecimiento orgánico de tu perfil, <br />
              <span className="font-bold"> empiezas a tener insights para crear un gran producto <br />
              que las personas estén deseando comprar.</span>
            </p>

            <p>
              Cuando creas contenido sin Instagrowth tienes una idea<br />
              de la realidad, que la mayoría de las veces es erronea, <br />
              porque no está basada en hechos.
            </p>
            
            <p>
               <span className="font-bold">Con Instagrowth tendrás hechos,</span> descubrirás cosas que <br />
              la gente realmente piensa y quiere, información que nunca <br />
              sabrías recopilar de forma normal.
            </p>

          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>5. Mi nicho está saturado y los grandes ya dominan <br />
            el mercado, ¿funcionara en ese caso?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <p>
              <span className="font-bold"> Uno de los problemas de ser grande en tu nicho es que <br />
              pierdes el elemento de cercanía con la gente. </span> Al fin y al <br />
              cabo, cuando te haces más grande, dejas de ser igual <br />
              a la gente de la comunidad que has creado.
            </p>

            <p>
              <span className="font-bold"> Y ahí es donde entra en juego la ventaja de ser <br />
              más pequeño. </span>
            </p>

            <p>
              Es como si Instagrowth fuera una máquina de dar voz a <br />
              los anónimos. Y como a todo el mundo le gusta tener voz, <br />
              <span className="font-bold"> te conviertes en el lider de esa gente anónima.</span>
            </p>

            <p>
              Lo que te estresa y te hace sentir mal no es crear el <br />
              contenido, es cuando sigues creando exhaustivamente <br />
              y no tienes respuesta. <span className="font-bold"> Lo que frusta a la gente no es el <br />
              trabajo, es el trabajo sin retorno. Instagrowth es trabajo <br />
              con retorno.</span>
            </p>

            <p>
              Así que ser pequeño acaba siendo una ventaja, porque ya <br />
              estás más cerca de la realidad de tu seguidor. <span className="font-bold">El resultado <br />
              es que con el tiempo creces, porque la gente ve que tu <br />
              comunidad es interesante.</span>
            </p>

            <p>
              Cuando llegues a ese punto, verás que tus problemas <br />
              serán de gente grande. Alex Barrio otro alumno del <br />
              método, apenas puede con la cantidad de mensajes <br />
              directos que recibe, lo cual es bueno, <span className="font-bold">porque así puede <br />
              cualificarlos para encontrar a los más deseosos <br />
              por comprar un producto.</span>
            </p>

          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 text-white rounded-t-3xl bg-violet-600 ">
          <p>6. Me da vergüenza exponer mi vida cotidiana, <br />
            ¿funcionara en ese caso?
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 py-4 rounded-b-3xl border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <p>
              No solo te pasa a ti, a la mayoría de nuestros alumnos <br />
              también.
            </p>
                        
            <p>
              Como el algoritmo de Instagram premia la interacción del <br />
              usuario, el resultado es que ofrecerá aún más tu contenido.
            </p>

            <p>
              <span className="font-bold"> Si quieres, ni siquiera tienes que dar la cara. Incluso lo <br />
              hemos probado y funciona mejor en texto que en video <br />
              en muchas ocasiones.</span> Porque la gente se para a leer lo <br />
              que has escrito, y si es un video ni siquiera hacen clic <br />
              y lo ven automáticamente.
            </p>

            <p>
              Así que el hecho de que no quieras exponer tu día, <br />
              mostrando un plato de comida, un viaje, un gimnasio, <br />
              un paseo, <span className="font-bold"> no es impedimento a la hora de poner en <br />
              práctica Instagrowth.</span>
            </p>
            
            <p>
              <span className="font-bold">Y por supuesto no hay ningún problema en exponer el día <br />
              a día, simplemente lo harás cuando te apetezca y de la <br />
              forma que quieras.</span>
            </p>

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default QuestionAccordion
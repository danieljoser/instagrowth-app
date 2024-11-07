import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const ModuleAccordion = () => {

  return (
    <Accordion type="multiple" className="mt-8 w-full flex flex-col gap-4" defaultValue={["item-1"]}>
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className=" text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>0. Tus primeros pasos en Instagrowth</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>0.1. Empieza por esto</p>
          <p>0.2. Bienvenida</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-0">
        <AccordionTrigger className="text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>1. Los secretos de Contenido <br/> de los Referentes</p>
          </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>1.1. 25 ideas de contenido de éxito</p>
          <p>1.2. Contenido para CONVERTIR</p>
          <p>1.3. Contenido para EDUCAR</p>
          <p>1.4. Contenido para AYUDAR</p>
          <p>1.5. Contenido para ENTRETENER</p>
          <p>1.6. Como hacer Publicidad</p>
          <p>Altamente Rentable</p>
          <p>1.7. Síntesis y Plan de Acción</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-0">
        <AccordionTrigger className="text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>2. Trucos para Optimizar tu Perfil</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>2.1. La foto de Perfil Perfecta</p>
          <p>2.2. Nombre y Descripción BIO</p>
          <p>2.3. Especialidad y CTA</p>
          <p>2.4. Prueba Social (ÉXITOS)</p>
          <p>2.5. Contenido de Valor Atractor </p>
          <p>de Audiencia</p>
          <p>2.6. CASO DE ESTUDIO: Análisis perfil</p>
          <p>optimizado chica</p>
          <p>2.7. CASO DE ESTUDIO: Análisis perfil</p>
          <p>optimizado chico</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-0">
        <AccordionTrigger className="text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>3. De 0 a 100.000 Seguidores <br />Reales en 3 Meses</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>3.1. Introducción</p>
          <p>3.2. Contenido y Formatos de Alto</p>
          <p>Alcance</p>
          <p>3.3. Multiplica x10 la Visibilidad</p>
          <p>en Stories</p>
          <p>3.4. Estrategia REEL VIRAL</p>
          <p>3.5. Caso Real: Cómo pasé de 10.000</p>
          <p>a 106.000 seguidores en 3 meses</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-0">
        <AccordionTrigger className="text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>
            4. CARRUSELES: La Gran Tendencia <br />
            de los Referentes
          </p>  
          </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>4.1. Introducción</p>
          <p>4.2. Estructura carrusel Perfecta</p>
          <p>4.3. Creación Paso a Paso</p>
          <p>+ Herramientas</p>
          <p>4.4. Publicidad carrusel y Medición</p>
          <p>Rendimiento (KPI's)</p>
          <p>4.5. Carrusel Viral: Explosión</p>
          <p>de Seguidores y Clientes</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="border-0">
        <AccordionTrigger className="text-2xl font-bold px-8 rounded-t-3xl bg-gray-200 border-4 border-violet-400">
          <p>5. Los Trucos de los INFLUENCERS <br />
          para Ganar Alcance</p>
        </AccordionTrigger>
        <AccordionContent className="text-2xl px-8 rounded-b-3xl bg-violet-600 text-white">
          <p>5.1. Sácate el Máximo Partido (parte 1)</p>
          <p>5.2. Sácate el Máximo Partido (parte 2)</p>
          <p>5.3. Tutorial: Edita las Fotos para un</p>
          <p>Look Profesional en Minutos</p>
          <p>5.4. Luce como una Influencer (Versión)</p>
          <p>Chicas</p>
          <p>5.5. Estrategia Rendimientos Infinitos</p>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}

export default ModuleAccordion
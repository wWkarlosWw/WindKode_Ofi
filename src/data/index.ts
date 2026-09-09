import type { Component } from 'vue'
import {
  MonitorSmartphone,
  BrainCircuit,
  Cable,
  CloudUpload,
  Lightbulb,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Code2,
  BugOff,
  PenTool,
  Handshake,
  Headset,
  ServerCog,
  Compass,
  Layers,
  FlaskConical,
  Rocket,
  RefreshCw,
} from '@lucide/vue'

export interface ServiceItem {
  key: 'web' | 'ia' | 'apis' | 'cloud' | 'consultoria'
  icon: Component
}

export const services: ServiceItem[] = [
  { key: 'web', icon: MonitorSmartphone },
  { key: 'ia', icon: BrainCircuit },
  { key: 'apis', icon: Cable },
  { key: 'cloud', icon: CloudUpload },
  { key: 'consultoria', icon: Lightbulb },
]

export interface StatItem {
  value: string
  labelKey: string
}

export const stats: StatItem[] = [
  { value: '12+', labelKey: 'stats.proyectos' },
  { value: '100%', labelKey: 'stats.clientes' },
  { value: '24/7', labelKey: 'stats.automatizacion' },
  { value: '15+', labelKey: 'stats.tecnologias' },
]

export interface TeamMember {
  name: string
  initials: string
  roleKey: string
}

/** Liderazgo visible en /equipo. El resto del equipo se presenta por áreas (ver `teamAreas`). */
export const team: TeamMember[] = [
  { name: 'Karlos Batista', initials: 'KB', roleKey: 'equipo.roles.fundador' },
  { name: 'David Chávez', initials: 'DC', roleKey: 'equipo.roles.segundo' },
]

export interface TeamAreaItem {
  key: 'desarrollo' | 'qa' | 'diseno' | 'ventas' | 'soporte' | 'infraestructura'
  icon: Component
}

/** Áreas del equipo (sin nombrar integrantes). Textos en `equipo.areas.<key>`. */
export const teamAreas: TeamAreaItem[] = [
  { key: 'desarrollo', icon: Code2 },
  { key: 'qa', icon: BugOff },
  { key: 'diseno', icon: PenTool },
  { key: 'ventas', icon: Handshake },
  { key: 'soporte', icon: Headset },
  { key: 'infraestructura', icon: ServerCog },
]

export interface PillarItem {
  key: 'rapido' | 'seguro' | 'colaborativo'
  icon: Component
}

export const pillars: PillarItem[] = [
  { key: 'rapido', icon: Zap },
  { key: 'seguro', icon: ShieldCheck },
  { key: 'colaborativo', icon: HeartHandshake },
]

export type ProcessStepKey =
  | 'descubrimiento'
  | 'diseno'
  | 'desarrollo'
  | 'pruebas'
  | 'despliegue'
  | 'evolucion'

export interface ProcessStep {
  key: ProcessStepKey
  icon: Component
  /** Fases conectadas con esta (se resaltan al seleccionarla). */
  related: ProcessStepKey[]
}

/** Ciclo de desarrollo mostrado en /servicios. Textos en `proceso.pasos.<key>`. */
export const processSteps: ProcessStep[] = [
  { key: 'descubrimiento', icon: Compass, related: ['diseno', 'evolucion'] },
  { key: 'diseno', icon: Layers, related: ['descubrimiento', 'desarrollo'] },
  { key: 'desarrollo', icon: Code2, related: ['diseno', 'pruebas'] },
  { key: 'pruebas', icon: FlaskConical, related: ['desarrollo', 'despliegue'] },
  { key: 'despliegue', icon: Rocket, related: ['pruebas', 'evolucion'] },
  { key: 'evolucion', icon: RefreshCw, related: ['despliegue', 'descubrimiento'] },
]

/** Tecnologías y áreas que aparecen en la marquesina de la home (TechMarquee). */
export const marqueeItems = [
  // Áreas
  'Web',
  'Mobile',
  'IA / AI',
  'Cloud',
  'APIs',
  'Automatización',
  // Lenguajes y frameworks
  'TypeScript',
  'JavaScript',
  'Python',
  'Vue',
  'Node.js',
  'Tailwind CSS',
  // Bases de datos
  'PostgreSQL',
  'MySQL',
  'SQL',
  'MongoDB',
  'Redis',
  // Infraestructura
  'Docker',
  'DevOps',
  'CI / CD',
  'Git',
]

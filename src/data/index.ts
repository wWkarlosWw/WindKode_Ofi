import type { Component } from 'vue'
import { MonitorSmartphone, BrainCircuit, Cable, CloudUpload, Lightbulb, Zap, ShieldCheck, HeartHandshake } from '@lucide/vue'

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

export const team: TeamMember[] = [
  { name: 'Karlos W.', initials: 'KW', roleKey: 'equipo.roles.fundador' },
  { name: 'Wind Dev', initials: 'WD', roleKey: 'equipo.roles.frontend' },
  { name: 'Kode Dev', initials: 'KD', roleKey: 'equipo.roles.backend' },
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

export const marqueeItems = ['Web', 'Mobile', 'IA / AI', 'Cloud', 'APIs', 'Vue', 'TypeScript', 'Node.js', 'Python', 'DevOps']

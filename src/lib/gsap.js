// Single source of truth for GSAP + plugin registration.
// Import gsap / ScrollTrigger / useGSAP from here everywhere else so the
// plugin is only registered once.
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }
export default gsap

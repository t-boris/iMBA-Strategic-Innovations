import { module1 } from './lectures/module1'
import { module2 } from './lectures/module2'
import { module3 } from './lectures/module3'
import { module4 } from './lectures/module4'
import { module5 } from './lectures/module5'
import { module6 } from './lectures/module6'
import { module7 } from './lectures/module7'
import { module8 } from './lectures/module8'

export const modules = [module1, module2, module3, module4, module5, module6, module7, module8]

export const getAllLectures = () =>
  modules.flatMap(m => m.lectures.map(l => ({ ...l, moduleTitle: m.title })))

export const findLecture = (id) => {
  for (const m of modules) {
    const l = m.lectures.find(l => l.id === id)
    if (l) return { ...l, moduleId: m.id, moduleTitle: m.title }
  }
  return null
}

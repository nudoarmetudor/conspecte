import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"
import SiteFooter from "./quartz/components/site/SiteFooter"
import SustinePopup from "./quartz/components/site/SustinePopup"
import SursaNotei from "./quartz/components/site/SursaNotei"

const config = await loadQuartzConfig()

// Pe toate tipurile de pagini (conținut, foldere, etichete, 404 etc.) se adaugă:
//  - sub titlu: sursa lecției;
//  - în subsol: licența, sursele, susținerea și fereastra „Cumpără-mi o cafea".
const baseLayout = await loadQuartzLayout()
const beforeBodyExtras = [SursaNotei()]
const footerExtras = [SiteFooter(), SustinePopup()]
const withExtras = <T extends { footer?: unknown[]; beforeBody?: unknown[] }>(pageLayout: T): T => ({
  ...pageLayout,
  beforeBody: [...((pageLayout.beforeBody as unknown[]) ?? []), ...beforeBodyExtras],
  footer: [...((pageLayout.footer as unknown[]) ?? []), ...footerExtras],
})

export const layout = {
  defaults: withExtras(baseLayout.defaults),
  byPageType: Object.fromEntries(
    Object.entries(baseLayout.byPageType).map(([type, pageLayout]) => [
      type,
      withExtras(pageLayout),
    ]),
  ),
} as typeof baseLayout

// În Quartz 5, loadQuartzConfig() construiește intern dispatcher-ul de pagini din YAML
// și ignoră `layout` exportat mai sus. Îl înlocuim cu unul construit din layout-ul extins.
const dispatcherIndex = config.plugins.emitters.findIndex((e) => e.name === "PageTypeDispatcher")
if (dispatcherIndex === -1) {
  throw new Error("quartz.ts: nu găsesc PageTypeDispatcher — verificați versiunea Quartz.")
}
config.plugins.emitters[dispatcherIndex] = PageTypeDispatcher(layout)

export default config

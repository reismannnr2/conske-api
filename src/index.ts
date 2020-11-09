import { getRepository } from 'typeorm';
import EventPlan from 'src/entity/EventPlan';

(() => {
  return getRepository(EventPlan);
})();

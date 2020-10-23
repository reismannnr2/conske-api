import { Get, JsonController, Param } from 'routing-controllers';
import { getRepository } from 'typeorm';
import EventPlan from 'src/entity/EventPlan';

@JsonController()
export default class ConskeController {
  @Get('/plan/:eventPlanId')
  async getEventPlan(@Param('eventPlanId') eventPlanId: string) {
    const eventPlan = await getRepository(EventPlan).findOne(
      {
        id: eventPlanId,
      },
      {
        relations: [
          'members',
          'members.dateAnswers',
          'members.dateAnswers.answers',
        ],
      },
    );
  }
}

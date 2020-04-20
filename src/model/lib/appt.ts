import { TimeUtils, Timeslot } from './times';

type RoleAlias = 'tutor' | 'pupil';

export interface AttendeeInterface {
  uid: string;
  roles: RoleAlias[];
}

export interface ApptInterface {
  subjects: string[];
  attendees: AttendeeInterface[];
  time: Timeslot;
  message?: string;
}

export class Appt implements ApptInterface {
  public message: string = '';
  public subjects: string[] = [];
  public attendees: AttendeeInterface[] = []; // TODO: Why is default time is 7-8am on Mondays?
  public time: Timeslot = new Timeslot(
    TimeUtils.getDate(1, 7),
    TimeUtils.getDate(1, 8)
  );

  /**
   * Wrap your boring `Record`s with this class to ensure that they have all of
   * the needed `ApptInterface` values (we fill any missing values w/
   * the above specified defaults) **and** to gain access to a bunch of useful
   * conversion method, etc (e.g. `toString` actually makes sense now).
   * @todo Actually implement a useful `toString` method here.
   */
  public constructor(request: Partial<ApptInterface> = {}) {
    Object.entries(request).map(([key, val]: [string, any]) => {
      if (!val) delete (request as Record<string, any>)[key];
    });
    Object.assign(this, request);
  }
}

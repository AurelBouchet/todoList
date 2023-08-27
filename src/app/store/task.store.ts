import { createStore, select, withProps } from '@ngneat/elf';

export interface LastTask {
  lastTask: string | null;
  lastDate: string | null;
}
export class TaskRepository {
  lastTaskStore = createStore(
    { name: 'taskStore' },
    withProps<LastTask>({ lastTask: null, lastDate: null })
  );

  lastTask$ = this.lastTaskStore.pipe(select((state) => state));

  updateLastTask(taskStore: LastTask) {
    this.lastTaskStore.update((state) => ({
      ...state,
      taskStore,
    }));
    console.log(taskStore);
  }
}

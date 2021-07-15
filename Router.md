# Example for horse App router

```typescript
<Switch>
    <Route exact path="/(|events)(|events/all)" component={Events} />
    <Route exact path="/horses" component={Horses} />

    <Route exact path="/horse/:horseId" component={PurelyHorseDetails} />
    <Route exact path="/horse/:horseId/:subAction(edit)" component={PurelyHorseDetails} />
    <Route exact path="/horse/:horseId/:action(vaccination)" component={PurelyHorseDetails} />
    <Route exact path="/horse/:horseId/vaccination/add" component={HorseAddVaccination} />
    <Route exact path="/horse/:horseId/vaccination/:vaccinationId" component={HorseDisplayVaccination} />

    <Route exact path="/event/add" component={CreateEvent} />
    <Route exact path="/event/:id/:subAction(edit)?" component={EventDetails} />
    <Route exact path="/event/:id/:action(collection)" component={EventCollection} />
    <Route exact path="/event/:id/:action(collection)/:subAction(edit)" component={EventCollection} />
    <Route exact path="/event/:id/collection/:action(add)?" component={AddHorses} />
    <Route exact path="/event/:id/:action(people)" component={EventPersons} />
    <Route exact path="/event/:id/:action(people)/:subAction(edit)" component={EventPersons} />
    <Route exact path="/event/:id/people/add" component={EventAddPersons} />
    <Route exact path="/person/add" component={CreatePerson} />
    <Route exact path="/person/:id" component={Person} />
    <Route exact path="/person/:id/edit" component={Person} />
    <Route exact path="/event/:id/horse/:horseId" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:subAction(edit)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(people)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(people)/:subAction(edit)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(people)/:subAction(add)" component={HorseAddPersons} />
    <Route exact path="/event/:id/horse/:horseId/:action(vaccination)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(examClinical)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(examXRays)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/:action(history)" component={HorseDetails} />
    <Route exact path="/event/:id/horse/:horseId/vaccination/add" component={HorseAddVaccination} />
    <Route exact path="/event/:id/horse/:horseId/vaccination/:vaccinationId" component={HorseDisplayVaccination} />
    <Route exact path="/event/:id/horse/:horseId/examClinical/add" component={CreateExamClinical} />
    <Route exact path="/event/:id/horse/:horseId/examClinical/:examClinicalId" component={ExamClinical} />
    <Route exact path="/event/:id/horse/:horseId/examClinical/:examClinicalId/:subAction(edit)" component={ExamClinical} />
    <Route exact path="/event/:id/horse/:horseId/examClinical/:examClinicalId/:subAction(sign)" component={ExamClinical} />
    <Route exact path="/event/:id/horse/:horseId/examXRays/add" component={CreateExamXRays} />
    <Route exact path="/event/:id/horse/:horseId/examXRays/:examXRaysId" component={ExamXRays} />
    <Route exact path="/event/:id/horse/:horseId/examXRays/:examXRaysId/:subAction(edit)" component={ExamXRays} />
    <Route exact path="/event/:id/horse/:horseId/examXRays/:examXRaysId/:subAction(sign)" component={ExamXRays} />
    <Route exact path="/notfound" component={NotFound} />
    <Redirect to="/notfound" />
</Switch>
```
Angular scope-with
==================

Adds ability to scope an object with a certain property in a template.

When using objects with nested properties, it can become tedious to display child properties in an angular template. 

#### For Example
```
  PersonController($scope) {
    $scope.person = {
      name: 'Alice Jane',
      nickname: 'Ali',
      age: '40',
      
      adddress: {
        street: '77 Mump Bump Road',
        country: 'USA',
        state: 'CI'
      }
    
    };
   
  }
```
#### Template
```
  <div ng-controller="PersonController">
    <div class="person">
        Name: {{person.name}} <br />
        Nickanme: {{person.nickname}} <br />
        Age: {{person.age}} <br />
        Address: <br />
        {{person.address.street}}<br />
        {{person.address.country}}<br />
        {{person.address.state}}
    </div>
  </div>
```
Typing out all the properties can become tedious and spoil your template code. 

### Scope With

The scope with directive is designed to scope the properties and transcludes them within the defined block:

### Template using scope-with

Re-using the same object we can modify our code to read as follows.
```
<div ng-controller="PersonController">
   <div class="person" scope-with="person">
      Name: {{name}} <br />
      Nickanme: {{nickname}} <br />
      Age: {{age}} <br />
      Address: <br />
      {{address.street}}<br />
      {{address.country}}<br />
      {{address.state}}
   </div>
</div>
```
Or:
```
<div ng-controller="PersonController">
   <div class="person" scope-with="person">
      Name: {{name}} <br />
      Nickanme: {{nickname}} <br />
      Age: {{age}} <br />
      Address: <br />
      <address scope-with="address">
        {{street}}<br />
        {{country}}<br />
        {{state}}
      </address>
   </div>
</div>
```
#### Using the directive

In your module, simply register the scope-with module as a dependency, or just copy and paste the directive code.


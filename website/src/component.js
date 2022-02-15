import React from 'react';
import './intro.css';
function Component(props){
    return (
      <div class="matter">
<div class="ui cards">
  <div class="card">
    <div class="content">
      <div style={{fontSize:"20px"}} class="meta">Declarative</div>
      <div style={{fontSize:"16px"}} class="description">
        React makes it painless to create interactive UIs.Design simple views for each state in your application,and React will efficiently update and render just the right components when your
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <div style={{fontSize:"20px"}} class="meta">Component-Based</div>
      <div style={{fontSize:"16px"}} class="description">
        Build encapsulated components that manage their own state,then compose them to make complex UIs.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <div style={{fontSize:"20px"}} class="meta">Learn Once,Write Anywhere</div>
      <div style={{fontSize:"16px"}} class="description">
        We don't make assumptions bout the rest of your technology stack,so you can develop new features in React without rewriting existing code.
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Component;
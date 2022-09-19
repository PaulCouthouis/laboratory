<script lang="ts"></script>

<form>
  <div class="form-control">
    <label class="label" for="nickname">
      <span class="label-text">Pseudo / Surnom *</span>
    </label>
    <input 
      required
      minlength="1"
      maxlength="255" 
      class="input" 
      id="nickname" 
      placeholder="Pikachu" 
      type="text"
    />
  </div>
  <div class="form-control">
    <label class="label" for="email">
      <span class="label-text">Email *</span>
    </label>
    <input 
      required
      minlength="5"
      maxlength="255" 
      class="input" 
      id="email" 
      placeholder="pika@pi.ka" 
      type="email"
    />
  </div>
  <div class="form-control">
    <label class="label" for="password">
      <span class="label-text">Mot de passe *</span>
    </label>
    <input 
      required 
      minlength="8"
      maxlength="255" 
      class="input" 
      id="password"
      type="password"
    />
  </div>
  <div class="form-control mt-6">
    <button class="btn btn-primary" type="submit">S'inscrire</button>
  </div>
</form>
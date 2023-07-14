<template>
  <div class="w-full bg-grey-100">
    <div class="max-w-6xl mx-auto py-20">
      <p class="">Go Back</p>
      <div class="flex gap-8 mt-8">
        <div>
          <div class="bg-white max-w-3xl p-12 rounded-lg">
            <h1 class="uppercase text-l">Checkout</h1>
            <p class="uppercase text-orange mt-8">Billing details</p>
            <div class="flex mt-5 gap-5">
              <div class="">
                <label class="block" for="name">Name</label>
                <input
                  id="name"
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="text"
                  placeholder="Alexei Ward"
                />
              </div>
              <div class="">
                <label class="block" for="name">Email Address</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="email"
                  name=""
                  placeholder="alexei@mail.com"
                />
              </div>
              <div class="">
                <label class="block" for="name">Phone Number</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="tel"
                  name=""
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>
            <p class="uppercase text-orange mt-8">Shipping info</p>
            <div class="flex mt-5 gap-5">
              <div class="">
                <label class="block" for="name">Address</label>
                <input
                  id="name"
                  class="w-full border border-solid border-gray-300 rounded-lg p-2"
                  type="text"
                  placeholder="Alexei Ward"
                />
              </div>
              <div class="">
                <label class="block" for="name">Email Address</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="email"
                  name=""
                  placeholder="alexei@mail.com"
                />
              </div>
              <div class="">
                <label class="block" for="name">Phone Number</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="tel"
                  name=""
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>
            <p class="uppercase text-orange mt-8">Payment details</p>
            <div class="flex mt-5 gap-5">
              <div class="">
                <label class="block" for="name">Address</label>
                <input
                  id="name"
                  class="w-full border border-solid border-gray-300 rounded-lg p-2"
                  type="text"
                  placeholder="Alexei Ward"
                />
              </div>
              <div class="">
                <label class="block" for="name">Email Address</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="email"
                  name=""
                  placeholder="alexei@mail.com"
                />
              </div>
              <div class="">
                <label class="block" for="name">Phone Number</label>
                <input
                  id=""
                  class="border border-solid border-gray-300 rounded-lg p-2"
                  type="tel"
                  name=""
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white max-w-sm p-8 rounded-lg">
          <h2 class="uppercase text-m mb-6">Summary</h2>
          <CartItem class="mb-6" />
          <CartItem class="mb-6" />
          <CartItem class="mb-6" />
          <div class="flex justify-between mb-4">
            <p class="uppercase">Total</p>
            <p class="uppercase">$ 5,396</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">Shipping</p>
            <p class="uppercase">$ 50</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">VAT (included)</p>
            <p class="uppercase">$ 1,079</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">Grand Total</p>
            <p class="uppercase text-orange">$ 5,446</p>
          </div>
          <button class="uppercase w-full bg-orange p-3 text-white">
            <nuxt-link to="/checkout">Continue & Pay</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

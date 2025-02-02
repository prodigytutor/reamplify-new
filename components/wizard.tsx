'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { GeneratedContentType } from '@/lib/types';
import { FormDataSchema } from '../lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod';
import GeneratedContent from './GeneratedContent';
import { saveProject } from '@/lib/actions/project';

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
  {
    id: 'Step 1',
    name: 'General Information',
    fields: ['reName', 'audience', 'keywords', 'brand']
  },
  {
    id: 'Step 2',
    name: 'Content',
    fields: ['existing', 'tone', 'channels', 'formats']
  },
  { id: 'Step 3', name: 'Complete' }
]
type WizardProps = {
projectId: number
}
export default function Wizard(projectId: WizardProps) {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Inputs | null>(null)
  const [result, setResult] = useState<GeneratedContentType>()
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })
  function navigateToDisplay(){}
  const processForm: SubmitHandler<Inputs> = data => {
  console.log("Processing form")
    console.log("Data:", data)
    const project = saveProject({id: projectId.projectId, project: data})
    console.log("Project", project)
    if (!project) {
      throw new Error("Failed to save project")
    }
    setLoading(true) 
    //call the content-completion api
        fetch('/api/content-completion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                setResult(result)
                setLoading(false)
                // use router to navigate to the next page passing the result
              
        // const router = useRouter();
        // router.push({
        //     pathname: '/generated-content',
        //     query: { result: JSON.stringify(result) }
        // });
             })
            .catch(error => {
                console.error('Error:', error);
                setError(error)
            });

    reset()
  }

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep].fields || []
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return
    setFormData(prev => ({ ...prev, ...watch() }))
    console.log(watch())  
    console.log('formData', formData)
    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }
  if (loading) return <p>Loading...</p>;
  return (
    <section className='absolute inset-0 flex flex-col justify-between p-24'>
      {/* steps */}
      <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='md:flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-sky-600 transition-colors '>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'
                >
                  <span className='text-sm font-medium text-sky-600'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : (
                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-gray-500 transition-colors'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {result && (
        <div className='mt-8'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Generated Content
            </h2>
            <GeneratedContent {...result} />
            </div>
              
      )}
      {/* Form */}
      <form className='mt-12 py-12' onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              General Information
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your campaign details.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  ReAmplify Campaign Name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='name'
                    {...register('name')}
                    autoComplete='campaign-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.name?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='audience'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Audience
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='audience'
                    {...register('audience')}
                    autoComplete='audience'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.audience?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.audience.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='brand'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Brand
                </label>
                <div className='mt-2'>
                  <input
                    id='brand'
                    type='text'
                    {...register('brand')}
                    autoComplete='brand'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.brand?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.brand.message}
                    </p>
                  )}
                </div>
              </div>            

              <div className='sm:col-span-4'>
                <label
                  htmlFor='keywords'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Keywords
                </label>
                <div className='mt-2'>
                  <input
                    id='keywords'
                    type='text'
                    {...register('keywords')}
                    autoComplete='keywords'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.keywords?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.keywords.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Content
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Tell us where to find your current contentn and how we should reAmplify it.
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              

              <div className='col-span-full'>
                <label
                  htmlFor='existingContent'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Existing Content
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='existingContent'
                    {...register('existingContent')}
                    autoComplete='existing-content'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.existingContent?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.existingContent.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='channels'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Channels
                </label>
                <div className='mt-2'>
                  <select
                    id='channels'
                    {...register('channels')}
                    autoComplete='country-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>Facebook</option>
                    <option>Twitter</option>
                    <option>Instagram</option>
                    <option>Bluesky</option>
                    <option>Email</option>
                    <option>Ad</option>
                  </select>
                  {errors.channels?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.channels.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1'>
                <label
                  htmlFor='tone'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Tone
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='tone'
                    {...register('tone')}
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.tone?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.tone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='format'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Formats
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='format'
                    {...register('format')}
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.format?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.format.message}
                    </p>
                  )}
                </div>
                <input
                  type='hidden'
                  id='status'
                  {...register('status')}
                  value='DRAFT'
                  />
                  <input
                  type='hidden'
                  id='userId'
                  {...register('userId')}
                  value='1'
                  />
              </div>

            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Complete
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className='mt-8 pt-5'>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={prev}
            disabled={currentStep === 0}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
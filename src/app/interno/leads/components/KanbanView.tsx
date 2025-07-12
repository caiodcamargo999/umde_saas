'use client';
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { LeadCard } from "./LeadCard";
import type { Lead } from '../page';

interface KanbanViewProps {
  leadsByEtapa: Record<string, Lead[]>;
  onDragEnd: (result: DropResult) => void;
  onLeadClick: (lead: Lead) => void;
}

export const KanbanView = ({ leadsByEtapa, onDragEnd, onLeadClick }: KanbanViewProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Object.entries(leadsByEtapa).map(([etapa, leads]) => (
          <Droppable droppableId={etapa} key={etapa}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`flex-1 min-w-[300px] bg-[#101C3A]/50 p-4 rounded-2xl border border-blue-500/20 ${snapshot.isDraggingOver ? 'bg-[#101C3A]/80' : ''}`}>
                <h2 className="text-lg font-bold text-white mb-4">{etapa} <span className="text-sm font-normal text-white/50">({leads.length})</span></h2>
                <div className="space-y-4">
                  {leads.map((lead, index) => (
                    <Draggable draggableId={lead.id} index={index} key={lead.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => onLeadClick(lead)}
                        >
                          <LeadCard lead={lead} isDragging={snapshot.isDragging} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

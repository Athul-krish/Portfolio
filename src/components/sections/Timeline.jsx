import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { experienceData } from "@/data/experience";

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
      {experienceData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative group"
        >
          {/* Animated Connection Node Dot */}
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-indigo-500/30">
            <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-purple-300" />
          </div>

          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <item.icon className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {item.type === "work" ? "Experience" : "Education"}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {item.location}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {item.role}
            </h3>
            <p className="text-sm font-semibold text-slate-400 mt-1 mb-3">
              {item.organization}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {item.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
